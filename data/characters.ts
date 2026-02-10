export interface Character {
    id: number;
    name: string;
    title: string;
    role: string;
    nature: string;
    powerType: string;
    description: string;
    image: string;
    theme: string;
}

export const characters: Character[] = [
    {
        id: 1,
        name: "Joseph Valemont",
        title: "The Fated Child",
        role: "Protagonist",
        nature: "Half-blood",
        powerType: "Unknown Potential",
        description: "Born of forbidden love, Joseph stands at the center of an ancient war and Fights for the balance of the world. Torn between humanity and monstrosity, his awakening threatens demons, vampires, and other Existences. His true power remains feared even by those who created the world’s balance.",
        image: "/images/characters/joseph/1.png",
        theme: "red"
    },
    {
        id: 2,
        name: "Sabrina Lopez",
        title: "The Unbroken Blade",
        role: "Deuteragonist",
        nature: "Human (Empowered)",
        powerType: "Enhanced Combat & Tactical Instinct",
        description: "Sharp-minded, fearless, and unyieldingly loyal, Lopez is Joseph’s anchor to humanity. Though human, she stands toe-to-toe with monsters, guided by instinct, discipline, and an unbreakable will. Her fate is deeply intertwined with Joseph’s rise—and fall.",
        image: "/images/characters/lopez/1.png",
        theme: "yellow"
    },
    {
        id: 3,
        name: "David Greyfang",
        title: "The Hier of Werewolves",
        role: "Ally / Comrade",
        nature: "Werewolf (Wielder)",
        powerType: "Raw Power and Elemental Manifestation",
        description: "Practical, cautious, and deeply loyal, David acts as the group’s shield in moments of chaos. Born into the Werewolf creed, his raw power, training and resolve allow him to survive it. He fights not for destiny—but for the people he loves.",
        image: "/images/characters/david/1.png",
        theme: "steel"
    },
    {
        id: 4,
        name: "Amayra Blackwood",
        title: "Heir of Secrets",
        role: "Ally / Emotional Core",
        nature: "Human (Dormant Legacy)",
        powerType: "Unknown (Bloodline-bound)",
        description: "Decendant of Fallen Human King, Amayra carries secrets far heavier than she realizes. Intelligent, warm, and quietly resilient, she stands at the crossroads of politics and prophecy. Her existence alone alters the balance of power in both human and supernatural realms.",
        image: "/images/characters/amayra/1.png",
        theme: "green"
    },
    // {
    //     id: 5,
    //     name: "Thomas Blackwood",
    //     title: "The Conjurare Master",
    //     role: "Mentor / Strategist",
    //     nature: "Human",
    //     powerType: "All Four Elements (Conjurare)",
    //     description: "A man of intellect, discipline, and hidden depth, Thomas Blackwood is one of the few humans to master all elemental Conjurare. A political force in the human world and a tactical genius, his choices ripple across realms—often at great personal cost.",
    //     image: "/images/characters/thomas/1.png",
    //     theme: "gold"
    // },
    // {
    //     id: 6,
    //     name: "Aria Mills",
    //     title: "The Fallen Light (Anaita)",
    //     role: "Mythic Figure / Hidden Protagonist",
    //     nature: "Reincarnated Archangel",
    //     powerType: "Primordial Light & Creation",
    //     description: "Once known as Anaita—the strongest archangel—Aria granted humanity magic and knowledge. Betrayed and slain by her own kind, she was reborn human. Her return signals the end of angelic supremacy and the rise of truths long buried in blood and betrayal.",
    //     image: "/images/characters/aria/1.png",
    //     theme: "ivory"
    // },
    // {
    //     id: 7,
    //     name: "William II",
    //     title: "The Vampire King",
    //     role: "Legendary Ruler / Tragic Monarch",
    //     nature: "Pure-blood Vampire",
    //     powerType: "Royal Blood Arts & Immortality",
    //     description: "A king forged by war and sacrifice, William II ruled the vampire realm with honor and restraint. His forbidden love reshaped history itself. Though long gone, his shadow looms over Joseph’s fate and the future of all supernatural beings.",
    //     image: "/images/characters/william/1.png",
    //     theme: "obsidian"
    // }
];
