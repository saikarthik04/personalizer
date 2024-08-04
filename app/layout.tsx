import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from "./clientSessionProvider"; 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Personalizer",
  description: "personalized content of youtube",
  category:"social media",
  creator:"Karthik mudigonda",
  publisher:"vercel"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body className={poppins.className}>
      <ClientSessionProvider >
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
