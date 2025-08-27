import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lincoln Murr - AI Agents & Crypto Infrastructure",
  description: "Building at the intersection of AI agents and crypto infrastructure. Currently at Coinbase working on AgentKit and x402.",
  keywords: "AI agents, crypto, blockchain, AgentKit, x402, Coinbase, Ethereum, Web3",
  authors: [{ name: "Lincoln Murr" }],
  openGraph: {
    title: "Lincoln Murr",
    description: "Building at the intersection of AI agents and crypto infrastructure",
    type: "website",
  },
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