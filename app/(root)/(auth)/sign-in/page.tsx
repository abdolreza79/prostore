import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/images/logo.svg";
import { APP_NAME } from "@/lib/constants";
import CredentialsSignInForm from "@/components/credentials-sign-in-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const SingnInPage = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <section className="flex justify-center items-center mt-8">
      <Card className="w-80 ">
        <CardHeader className="text-center space-y-3 pb-1">
          <Link href="/">
            <Image
              src={LogoSvg}
              alt={`${APP_NAME} log`}
              width={40}
              height={40}
              priority
              className="mx-auto"
            />
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignInForm />
        </CardContent>
        <CardFooter className="justify-center">
          <div className="flex justify-center items-center gap-1 text-sm">
            <p className="text-gray-500">Don&apos;t have an account ?</p>
            <Link href="/sign-up" className="text-primary">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SingnInPage;
