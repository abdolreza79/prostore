"use server";

import { InvalidLoginError, signIn, signOut } from "@/auth";
import { signInFormSchema, signUpFormSchema } from "../validators";
import prisma from "@/prisma/db";
import { hash } from "bcrypt-ts-edge";

export async function signInWithCredentials({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const validation = signInFormSchema.safeParse({ email, password });
  if (!validation.success) {
    return { success: false, errors: validation.error.issues[0].message };
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (error instanceof InvalidLoginError) {
      return {
        success: false,
        errors: "Invalid email or password",
      };
    }
    return { success: false, errors: "Something went wrong" };
  }
}

export async function signUpWithCredentials({
  name,
  email,
  password,
  passwordConfirm,
}: {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}) {
  const validation = signUpFormSchema.safeParse({
    name,
    email,
    password,
    passwordConfirm,
  });
  if (!validation.success) {
    return { success: false, errors: validation.error.issues[0].message };
  }
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user) {
    return { success: false, errors: "Email is already exist" };
  }
  const hashedPassword = await hash(password, 10);
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  return { success: true, message: "User created successfully" };
}

export async function signOutUser() {
  await signOut();
}
