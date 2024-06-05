import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./components/ui/fonts";

import { ModalProvider } from "./providers/model-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainHeader from "./components/mainheader";
import MainFooter from "./components/mainFoooter";

export const metadata: Metadata = {
  title: "PhotuneLightway",
  description:
    "Enter the dApp to claim fortune, claim nfts or tokens to continue with your journey. Be sure to hodl save up for the next visit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`} >
        <MainHeader />
        {children}
        <ModalProvider />
        <ToastContainer />
        <MainFooter />
      </body>
    </html>
  );
}
