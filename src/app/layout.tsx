import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lincoln Murr",
  description: "Building tools and experiences at the intersection of AI and web3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}