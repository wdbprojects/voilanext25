"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useTheme } from "next-themes";
// import VoilaLogoDark from "@/public/images/voila-logo-dark.svg";
import VoilaLogoLight from "@/public/images/voila-logo-light.svg";
import DarkMode from "@/components/shared/dark-mode";
import Container from "@/components/layout/container";
import CartButton from "@/components/cart/cart-button";
import MenuUser from "@/components/shared/menu-user";
import SearchInput from "@/components/forms/search-input";

const Header = () => {
  //const { theme } = useTheme();

  return (
    <header className="mx-auto border-b bg-muted/40">
      <Container className="grid h-12 w-full grid-cols-12 items-center justify-between gap-4 px-4 sm:h-[60px] sm:px-8">
        {/* LOGO */}
        <div className="col-span-3 flex items-center">
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
        <div className="col-span-5 hidden w-full justify-center sm:flex">
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
        {/* ICONS & MENU */}
        <div className="col-span-4 flex items-center justify-end gap-6">
          <DarkMode />
          <CartButton />
          <MenuUser />
        </div>
      </Container>
    </header>
  );
};
export default Header;
