import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
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
      <body className={`${montserrat.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
