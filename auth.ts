import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma/db";
import { compare } from "bcrypt-ts-edge";

export class InvalidLoginError extends CredentialsSignin {
  message = "Invalid email or password";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });
        if (!user) {
          throw new InvalidLoginError();
        }
        const isMatchPassword = await compare(
          credentials.password as string,
          user.password!
        );
        if (!isMatchPassword) {
          throw new InvalidLoginError();
        }
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, trigger, token }: any) {
      session.user.id = token.sub;
      if (trigger === "update") {
        session.user.name = user.name;
      }
      return { ...session, user: { ...session.user, ...token } };
    },
  },
});
