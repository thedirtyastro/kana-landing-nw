import type { Metadata } from "next";
import { Poppins, Victor_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kana Landing Page",
  description: "A simple landing page built with Next.js and Tailwind CSS",
};

const victorMono = Victor_Mono({
  subsets: ["latin"],
  variable: "--font-victor-mono",
  display: "swap",
});


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${victorMono.variable}  bg-[#020E16] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
