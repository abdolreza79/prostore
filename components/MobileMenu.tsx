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

const MobileMenu = () => {
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
          <Button size="sm" asChild>
            <Link href="/sign-in">
              <UserIcon className="w-6 h-6" />
              Sign In
            </Link>
          </Button>
          <SheetDescription>M</SheetDescription>

          {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
