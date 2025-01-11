import { Button } from "@/components/ui/button";
import Logo from "@/public/images/logo.svg";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-164px)]">
      <Card className="w-[350px] flex items-center justify-center gap-1 flex-col">
        <CardHeader className="space-y-3">
          <CardTitle className="flex items-center justify-center">
            <Image src={Logo} alt={`${APP_NAME} logo`} className="w-16 h-16" />
          </CardTitle>
          <CardDescription className="text-3xl font-bold text-center">
            Not Found
          </CardDescription>
          <CardDescription className="text-red-500 text-sm mt-5">
            Couldn&apos;t not found request page
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotFound;
