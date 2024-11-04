import { ReactNode } from "react";
import type { Metadata } from "next";
import { montserrat } from "@/lib/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Container from "@/components/layout/container";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Alibaba Store",
  description: "Multipurpose e-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", montserrat.variable)}>
        <Providers>
          <Header />
          <Container className="py-8">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
