export interface LoreSection {
    id: string;
    title: string;
    era: string;
    theme: string;
    img: string;
    content: string;
}

export const lore = [
    {
        id: 1,
        title: "The First Silence",
        era: "Before Time Was Named",
        theme: "origin",
        img: "/images/lore/origin.png",
        content: `
Before humanity learned to pray, the world already listened.

Angels descended as wardens, demons rose as conquerors,
and vampires were born in the space between —
not cursed, not blessed, but necessary.

Balance was never meant to be gentle.
`
    },

    {
        id: 2,
        title: "The Hidden War",
        era: "The Age of Ash and Blood",
        theme: "war",
        img: "/images/lore/war2.png",
        content: `
Heaven called it justice.
Hell called it rebellion.
History calls it silence.

Wars were fought in shadows, cities burned and were erased,
and mankind was allowed to forget —
because remembering would have destroyed them.

The war never ended.
It only learned to hide.
`
    },

    {
        id: 3,
        title: "The Half-Blood Prophecy",
        era: "The Broken Covenant",
        theme: "prophecy",
        img: "/images/lore/prophecy.png",
        content: `
It was forbidden.

A union between immortal blood and fragile flesh.
A child who should not exist —
and yet, the world bent around him.

The prophecy never named a savior.
It warned of a reckoning.
`
    },

    {
        id: 4,
        title: "The Masquerade",
        era: "The Modern Age",
        theme: "secrecy",
        img: "/images/lore/secrecy.png",
        content: `
Magic did not vanish.
Monsters did not die.

They adapted.

Skyscrapers replaced castles.
Corporations replaced kingdoms.
Power learned to wear suits and smiles.

And humanity was allowed to believe
they were alone.
`
    },

    {
        id: 5,
        title: "Whispers Yet to Come",
        era: "Will be lead by Fate",
        theme: "future",
        img: "/images/lore/future.png",
        content: `
Some truths are buried for a reason.

Memories are returning.
Alliances are cracking.
Old gods are watching again.

And the heir of shadows and light
is running out of time.
`
    }
];
