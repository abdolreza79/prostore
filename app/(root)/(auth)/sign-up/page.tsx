import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/images/logo.svg";
import { APP_NAME } from "@/lib/constants";
import CredentialsSignUpForm from "@/components/credentials-sign-up-form";

const SingnUpPage = () => {
  return (
    <section className="flex justify-center items-center mt-2">
      <Card className="w-[350px] ">
        <CardHeader className="text-center space-y-3 pb-2">
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
          <CardTitle className="text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSignUpForm />
        </CardContent>
        <CardFooter className="justify-center">
          <div className="flex justify-center items-center gap-1 text-sm">
            <p className="text-gray-500">Already have an account ?</p>
            <Link href="/sign-in" className="text-primary">
              Sign In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SingnUpPage;
