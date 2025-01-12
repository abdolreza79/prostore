import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "./shared/header/mode-toggle-btn";
import { Button } from "./ui/button";
import Link from "next/link";

import UserButton from "./shared/header/user-button";

const DesktopMenu = async () => {
  return (
    <div className="hidden md:flex items-center md:gap-3">
      <Button variant="ghost" asChild>
        <Link href="/cart">
          <ShoppingCart className="w-8 h-8" />
          Cart
        </Link>
      </Button>
      <UserButton />
      <ModeToggle />
    </div>
  );
};

export default DesktopMenu;
