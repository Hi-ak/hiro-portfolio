import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hiro's Developer Portfolio",
  description: "I create web and games for problem-solving, fun, and friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
