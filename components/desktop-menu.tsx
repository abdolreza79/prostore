import { ShoppingCart, UserIcon } from "lucide-react";
import { ModeToggle } from "./shared/header/mode-toggle-btn";
import { Button } from "./ui/button";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center md:gap-3">
      <Button variant="ghost" asChild>
        <Link href="/cart">
          <ShoppingCart className="w-8 h-8" />
          Cart
        </Link>
      </Button>
      <Button size="sm" asChild>
        <Link href="/sign-in">
          <UserIcon className="w-6 h-6" />
          Sign In
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
};

export default DesktopMenu;
