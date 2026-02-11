export interface NovelDetails {
    title: string;
    subtitle: string;
    author: string;
    poster: string;
    synopsis: string;
    metadata: {
        genre: string[];
        status: "Ongoing" | "Completed";
        chapters: number;
        published: string;
        rating: number;
        views: string;
        seasons?: number;
    };
    platforms: {
        name: string;
        url: string;
        logo: string;
    }[];
    tags: string[];
}

export const novelDetails: NovelDetails = {
    title: "The Secrets of CHIAROSCURO",
    subtitle: "The Fated Heir of Shadows and Light",
    author: "Anoop Kumar",
    poster: "/images/POSTER.png",

    synopsis: `
In a world where supernatural royalty rules from the shadows, humanity lives unaware beneath a fragile illusion.

When light defies heaven, shadow challenges hell, and love violates ancient law, destiny is forced into motion.

Born of a forbidden union, a half-blood heir stands at the center of a looming catastrophe—caught between vampire courts, angelic conspiracies, and demonic ambitions. As forgotten powers awaken and the past refuses to stay buried, the line between savior and destroyer begins to blur.

Some secrets were never meant to be revealed.
Some prophecies were never meant to come true.
But fate has already chosen its heir.
    `.trim(),

    metadata: {
        genre: ["Dark Fantasy", "Supernatural", "Romance", "Action"],
        status: "Ongoing",
        chapters: 50,
        published: "2025",
        rating: 4.6,
        views: "5K+",
        seasons: 2,
    },

    platforms: [
        {
            name: "Wattpad",
            url: "https://www.wattpad.com/story/395006077-the-secrets-of-chiaroscuro-the-fated-heir-of",
            logo: "https://cdn-icons-png.flaticon.com/512/3670/3670197.png",
        },
        {
            name: "Royal Road",
            url: "https://www.royalroad.com/fiction/125859/the-secrets-of-chiaroscuro-the-fated-heir-of-shadows",
            logo: "https://www.royalroad.com/icons/android-chrome-192x192.png",
        },
    ],

    tags: [
        "Half-Blood",
        "Vampires",
        "Demons",
        "Prophecy",
        "Forbidden Love",
        "Hidden War",
        "Ancient Magic",
        "Supernatural Politics",
    ],
};
