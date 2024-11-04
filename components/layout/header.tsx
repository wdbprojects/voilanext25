"use client";

import Image from "next/image";
import Link from "next/link";
// import { useTheme } from "next-themes";
// import VoilaLogoDark from "@/public/images/voila-logo-dark.svg";
import VoilaLogoLight from "@/public/images/voila-logo-light.svg";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DarkMode from "@/components/shared/dark-mode";
import Container from "@/components/layout/container";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/shared/menu-user";

const Header = () => {
  //const { theme } = useTheme();

  return (
    <header className="mx-auto border-b bg-muted/40">
      <Container className="flex h-12 flex-row items-center justify-between gap-4 px-4 sm:h-[60px] sm:flex-row sm:px-8">
        {/* LOGO */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="">
            <Image
              // src={theme === "dark" ? VoilaLogoLight : VoilaLogoDark}
              src={VoilaLogoLight}
              width={60}
              height={60}
              alt="Voila Logo"
            />
          </Link>
        </div>
        {/* SEARCH BAR */}
        <div className="hidden w-full flex-1 justify-center sm:flex">
          <form className="w-full">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products"
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </form>
        </div>
        {/* ICONS & MENU */}
        <div className="flex flex-1 items-center justify-end gap-6">
          <DarkMode />
          <CartButton />
          <MenuUser />
        </div>
      </Container>
    </header>
  );
};
export default Header;
