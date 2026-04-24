import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: "%s | Spire Guide", default: "Spire Guide" },
  description: "Strategy guide for Slay the Spire 1 and Slay the Spire 2 — characters, archetypes, cards, and relics.",
  manifest: "/spire/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Spire Guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0908" />
        <link rel="apple-touch-icon" href="/spire/icons/icon-192.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
