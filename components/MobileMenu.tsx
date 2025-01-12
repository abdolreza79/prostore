import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./shared/header/mode-toggle-btn";
import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user";

const MobileMenu = async () => {
  const session = await auth();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild className="align-middle">
          <EllipsisVertical />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start justify-start gap-3">
          <SheetTitle>Menu</SheetTitle>
          <ModeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6" />
              Cart
            </Link>
          </Button>
          {session ? (
            <div className="flex flex-col">
              <span>{session.user?.name}</span>
              <span className="text-sm text-gray-500">
                {session.user?.email}
              </span>
              <form action={signOutUser} className="w-full">
                <Button type="submit" size="sm" className="w-full">
                  {/* <UserIcon className="w-6 h-6" /> */}
                  Sign Out
                </Button>
              </form>
            </div>
          ) : (
            <Button size="sm" asChild>
              <Link href="/sign-in">
                <UserIcon className="w-6 h-6" />
                Sign In
              </Link>
            </Button>
          )}
          <SheetDescription></SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
