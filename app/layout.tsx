import type { Metadata } from "next";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";

export const metadata: Metadata = {
  title: "CHIAROSCURO - The Secrets of Light & Shadow",
  description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.",
  keywords: ["dark fantasy", "urban fantasy", "supernatural", "vampire", "angel", "novel", "CHIAROSCURO"],
  authors: [{ name: "CHIAROSCURO" }],
  openGraph: {
    title: "CHIAROSCURO - The Secrets of Light & Shadow",
    description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIAROSCURO - The Secrets of Light & Shadow",
    description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals.",
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
        {/* This is strictly for analytical purpose only publically avaliable info is collected */}
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
