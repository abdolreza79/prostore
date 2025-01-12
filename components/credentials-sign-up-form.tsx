"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";
import { signUpFormSchema } from "@/lib/validators";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpWithCredentials } from "@/lib/actions/user";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const CredentialsSignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      //   name: "reza",
      //   email: "abdolreza79@gmail.com",
      //   password: "Reza@345200",
      //   passwordConfirm: "Reza@345200",
    },
  });

  async function submitFormHandler(values: z.infer<typeof signUpFormSchema>) {
    const data = await signUpWithCredentials({
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
    });
    if (!data.success) {
      toast({
        title: data!.errors,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: data!.message,
      className: "bg-green-600 text-white",
    });
    form.reset();
    router.push("/");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitFormHandler)}
        className="space-y-4"
      >
        <fieldset
          className="flex flex-col gap-2"
          disabled={form.formState.isSubmitting}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={form.formState.errors.name ? "text-gray-700" : ""}
                >
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="name"
                    {...field}
                    className={cn(
                      "focus-visible:ring-0 focus-visible:ring-offset-0",
                      {
                        "border-red-400": form.formState.errors.name,
                      }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={form.formState.errors.email ? "text-gray-700" : ""}
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className={cn(
                      "focus-visible:ring-0 focus-visible:ring-offset-0",
                      {
                        "border-red-400": form.formState.errors.email,
                      }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={
                    form.formState.errors.password ? "text-gray-700" : ""
                  }
                >
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className={cn(
                      "focus-visible:ring-0 focus-visible:ring-offset-0",
                      {
                        "border-red-400": form.formState.errors.password,
                      }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={
                    form.formState.errors.passwordConfirm ? "text-gray-700" : ""
                  }
                >
                  Password Confirm
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="PasswordConfirm"
                    {...field}
                    className={cn(
                      "focus-visible:ring-0 focus-visible:ring-offset-0",
                      {
                        "border-red-400": form.formState.errors.passwordConfirm,
                      }
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};

export default CredentialsSignUpForm;
