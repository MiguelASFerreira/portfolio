import "./globals.css";

import { Inter, Lobster } from "next/font/google";

import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${lobster.variable} pt-20 antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
