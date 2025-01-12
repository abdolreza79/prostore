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
import { signInFormSchema } from "@/lib/validators";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithCredentials } from "@/lib/actions/user";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const CredentialsSignInForm = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function submitFormHandler(values: z.infer<typeof signInFormSchema>) {
    const data = await signInWithCredentials({
      email: values.email,
      password: values.password,
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
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};

export default CredentialsSignInForm;
