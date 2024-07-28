import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from '@/app/ClientSessionProvider';
import Navbar from "./lib/components/navbar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ClientSessionProvider >
          <Navbar/>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
