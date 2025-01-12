import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/auth";
import { UserIcon } from "lucide-react";
import Link from "next/link";

const UserButton = async () => {
  const session = await auth();
  if (!session) {
    return (
      <Button size="sm" asChild>
        <Link href="/sign-in">
          <UserIcon className="w-6 h-6" />
          Sign In
        </Link>
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-gray-100 dark:bg-primary focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {session?.user?.name?.charAt(0).toUpperCase() ?? "U"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-44">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="capitalize font-semibold">
              {session.user?.name}
            </span>
            <span className="text-xs text-gray-500">{session.user?.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem>
          <form action={signOutUser} className="w-full">
            <Button type="submit" size="sm" className="w-full">
              {/* <UserIcon className="w-6 h-6" /> */}
              Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
