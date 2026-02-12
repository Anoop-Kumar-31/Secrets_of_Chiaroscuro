import type { Metadata } from "next";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";
import StructuredData from "@/components/StructuredData";

const baseUrl = "https://secrets-of-chiaroscuro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light",
  description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.",
  keywords: ["dark fantasy", "urban fantasy", "supernatural", "vampire", "angel", "novel", "CHIAROSCURO", "fantasy novel", "supernatural romance", "forbidden love"],
  authors: [{ name: "Ak31" }],
  creator: "Ak31",
  publisher: "Ak31",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light",
    description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "CHIAROSCURO",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light",
      },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "google4f440a4f74955381", // Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {/* This is strictly for analytical purpose only publically avaliable info is collected */}
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
