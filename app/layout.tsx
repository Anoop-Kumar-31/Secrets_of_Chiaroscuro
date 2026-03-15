import type { Metadata } from "next";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";
import StructuredData from "@/components/StructuredData";

const baseUrl = "https://secrets-of-chiaroscuro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light",
  description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.",
  keywords: [
    // CORE TITLE & SERIES
    "The Secrets of CHIAROSCURO", "The Secrets of CHIAROSCURO novel", "The Secrets of CHIAROSCURO series", "The Secrets of Chiaroscuro", "The Secrets of Chiaroscuro novel", "The Secrets of Chiaroscuro series", "TSOC novel", "TSOC series", "Secrets of Chiaroscuro", "Secrets of Chiaroscuro novel", "Secrets of Chiaroscuro series", "Secrets of Chiaroscuro book",
    // PRIMARY GENRES
    "dark fantasy", "urban fantasy", "epic fantasy", "high fantasy", "gothic fantasy", "supernatural", "paranormal", "mythic fantasy", "fantasy novel", "fantasy series",
    // Generalized tags
    "romance", "fantasy romance", "slow burn romance", "slow burn fantasy romance", "slowburn novel", "rich story novel", "rich story series", "rich story book", "rich story story", "royal road novel", "royal road series", "royal road book", "royal road story",
    // CREATURE / CHARACTER TYPES
    "vampire", "angel", "vampire romance", "angel romance", "vampire hybrid", "angel hybrid", "half-blood", "hybrid", "vampire kingdom", "vampire court", "vampire prince", "vampire king", "vampire novels", "angel books",
    // ROMANCE TROPES
    "forbidden love", "forbidden romance", "star crossed lovers", "slow burn romance", "enemies to lovers", "supernatural romance", "paranormal romance", "dark romance", "fantasy romance", "tragic romance", "angsty romance", "emotional romance",
    // CHARACTER ARCHETYPES
    "broken hero", "morally grey hero", "anti hero", "tortured hero", "brooding hero", "powerful hero", "chosen one", "hidden heir", "lost prince", "strong female lead", "heroine who heals",
    // PLOT TROPES
    "memory loss", "amnesia trope", "prophecy", "found family", "sacrifice and redemption", "light in darkness", "hope and despair", "betrayal", "conspiracy", "rebellion", "revolution", "dark secrets", "political intrigue", "royal succession", "throne war", "court intrigue", "castle politics",
    // MAGIC & WORLD BUILDING
    "ancient magic", "elemental magic", "blood magic", "demonic corruption", "dark magic", "ancient artifacts", "conjurare", "magic system", "unique magic", "mythology inspired", "hindu mythology", "dark forest", "mythical forest", "gothic atmosphere", "haunting", "atmospheric", "dark and beautiful", "immersive fantasy", "dark aesthetic", "gothic romance aesthetic", "dark academia fantasy", "moonlight aesthetic",
    // SETTING & ATMOSPHERE
    "vampire kingdom map", "throne room drama", "dark forest journey", "half-blood rebellion", "lopez demon realm", "dark fantasy aesthetic", "vampire core", "angel core", "castle core", "velvet and steel", "blood and shadows",
    // WRITING STYLE
    "lyrical prose", "hauntingly beautiful", "emotional depth", "immersive storytelling", "cinematic fantasy", "character driven",
    // COMPARISON TITLES (for "readers who liked X")
    "books like the witcher", "books like vampire academy", "books like twilight for adults", "books like a discovery of witches", "books like from blood and ash", "books like crescent city", "books like throne of glass", "books like the bargainer series", "books like plated prisoner", "books like the bridge kingdom", "books like the cruel prince", "vampire romance like midnight breed", "angel romance like fallen", "game of thrones meets romance", "the witcher meets vampire diaries", "outlander but fantasy", "acotar for vampire lovers", "twilight meets politics",
    // PLATFORM SPECIFIC
    "royal road", "royal road novel", "royal road story", "royal road book", "royal road best fantasy", "royal road trending", "royal road rising stars", "wattpad", "wattpad novel", "wattpad story", "wattpad book", "wattpad must reads", "wattpad fantasy romance", "wattpad completed stories", "tapas", "webnovel", "online fantasy novels", "free fantasy books online", "serialized fantasy fiction", "chapter by chapter fantasy",
    // READER SEARCH INTENT
    "best fantasy novel", "new fantasy series", "vampire fantasy series", "top fantasy romance", "award winning fantasy", "must read fantasy", "dark fantasy books", "best dark fantasy novels", "gothic fantasy series", "epic fantasy with romance", "vampire fantasy novels", "angel fantasy books", "supernatural romance books", "paranormal romance series", "new fantasy series 2025", "top fantasy novels 2025", "fantasy books for adults", "mature fantasy novels", "dark romance fantasy books", "fantasy with political intrigue",
    // TROPE-SPECIFIC SEARCHES
    "books with forbidden love", "slow burn romance books", "found family trope", "chosen one prophecy books", "amnesia romance fantasy", "morally grey hero books", "anti hero fantasy novels", "hidden heir fantasy", "lost prince returns", "vampire prince romance", "powerful vampire novels", "strong female lead fantasy", "heroine who heals",
    // MOOD-BASED SEARCHES
    "atmospheric fantasy books", "dark atmospheric novels", "gothic romance fantasy", "emotional fantasy books", "heartbreaking fantasy romance", "books that make you cry fantasy", "page turner fantasy", "can't put down fantasy books", "binge worthy fantasy series", "completed fantasy series", "long fantasy series", "epic fantasy saga", "multi book fantasy romance",
    // SOCIAL MEDIA & DISCOVERY
    "booktok fantasy recommendations", "booktube fantasy favorites", "bookstagram fantasy romance", "viral fantasy books", "underrated fantasy gems", "hidden gem fantasy novels", "indie fantasy authors", "self published fantasy gems",
    // CHARACTER NAMES (for dedicated searches)
    "joseph", "amayra", "alistair", "selene", "queen valeria", "lord william", "aria", "aria mills", "lazarus", "david", "thomas", "lopez",
    // CHARACTER RELATIONSHIPS & ARCS
    "joseph and amayra romance", "alistair character development", "selene villain arc", "queen valeria backstory", "aria mills history", "conjurare artifacts explained",
    // READER QUESTIONS
    "good fantasy books to read", "best fantasy romance novels", "what fantasy book should I read next", "popular fantasy series", "highly rated fantasy books", "fantasy books with romance and action"
  ],
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
  twitter: {
    card: "summary_large_image",
    title: "The Secrets of CHIAROSCURO",
    description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals.",
    images: [`${baseUrl}/images/POSTER.png`],
  },
  openGraph: {
    title: "The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light",
    description: "A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "The Secrets of CHIAROSCURO",
    images: [
      {
        url: `${baseUrl}/images/POSTER.png`,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
