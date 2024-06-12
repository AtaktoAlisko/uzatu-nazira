import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nazira Uzatu",
  description: "toy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[url('/all-bg.jpg')]">{children}</body>
    </html>
  );
}
