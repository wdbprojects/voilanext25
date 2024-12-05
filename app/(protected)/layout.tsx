import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Container from "@/components/layout/container";

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
    <div>
      <Header />
      <Container className="py-8">{children}</Container>
    </div>
  );
}
