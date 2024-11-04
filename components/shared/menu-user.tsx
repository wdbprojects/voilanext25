import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";
import UserIcon from "@/components/shared/user-icon";
import Link from "next/link";
import { links } from "@/lib/data";

const MenuUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="// remove :focus flex max-w-[100px] gap-2 px-2 focus-visible:ring-0"
        >
          <Menu className="h-6 w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" sideOffset={5}>
        <DropdownMenuLabel>Nata Slut</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((link) => {
          const { id, href, label, icon } = link;
          return (
            <DropdownMenuItem key={id} asChild className="cursor-pointer">
              <Link href={href} className="w-full capitalize">
                {icon}
                <span>{label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default MenuUser;
