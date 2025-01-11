import LogoSrc from "@/public/images/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import MobileMenu from "@/components/MobileMenu";
import DesktopMenu from "@/components/desktop-menu";

export const Header = () => {
  return (
    <header className="border-b border-slate-100">
      <nav className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LogoSrc}
            alt={`${APP_NAME} logo`}
            width={36}
            height={36}
            className="w-9 h-9 object-cover"
          />
          <span className="hidden md:block text-2xl font-semibold">
            {APP_NAME}
          </span>
        </Link>
        <DesktopMenu />
        <MobileMenu />
      </nav>
    </header>
  );
};
