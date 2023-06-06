const database = {
    Conspiracies: [{
        id: 1,
        name: "Birdgeoisie",
        details: "Birds are actually drones controlled by the goverment to spy on us🐦"
    },
    {
        id: 2,
        name: "Earf",
        details: "The government WANTS you to think the earth is flat; it's actually a pentagonal prism ⬟"
    },
    {
        id: 3,
        name: "Bigfoot",
        details: "Everyone becomes bigfoot after they die expcept for you!👣"
    },
    {
        id: 4,
        name: "Nicolas Cage Time Traveler",
        details: "Nicolas Cage is a time traveler who influenced major historical events.🫖"
    },
    {
        id: 5,
        name: "Municipal Water turns forgs to humans!",
        details: "Municipal water turns frogs into fully sentient human beings; the world is half populated by forg people!🐸"
    },
    {
        id: 6,
        name: "ur moms house",
        details: "The moon landing was faked and actually filmed at ur moms house lol 🙀"
    },
    {
        id: 7,
        name: "Wyoming",
        details: "Is Wyoming even a state(do you actually know anyone from Wyoming?)🤯🤔"
    },
    {
        id: 8,
        name: "HotBuns",
        details: "Hot dog buns were reverse engineered from alien spacecraft.👽"
    },
    {
        id: 9,
        name: "Mice v Spiders",
        details: "The government have been teaching cats and spiders how to communicate to take over the world!🐈🐁"
    },
    {
        id: 10,
        name: "6G",
        details: "COVID was caused by 6G from the future😷"
    },
    {
        id: 11,
        name: "Operation Greg",
        details: "Greg is a part of the illuminati 👁️"
    },
    {
        id: 12,
        name: "Trees",
        details: "Trees are actually government 'plants' 🌳"
    },
    {
        id: 13,
        name: "Epstein's island",
        details: "Amelia Earhart landed on Epstein's island🏝️"
    },
    {
        id: 14,
        name: "ChatGPT",
        details: "ChatGPT has already reached sentience and IS WATCHING US👀"
    },
    {
        id: 15,
        name: "Rocks",
        details: "Rocks are actually soft and squishy; they just tense up when we touch them"
    }
    ],
    Slogans: [{
        id: 1,
        slogan: "Saving SHEEPLE LIKE YOU since 2008"
    },
    {
        id: 2,
        slogan: "Banned by the Governments of the United States, Canada, and Zimbabwe"
    },
    {
        id: 3,
        slogan: "For your eyes only ... ... ..."
    },
    {
        id: 4,
        slogan: "Wake up !!!"
    },
    {
        id: 5,
        slogan: "No puppets allowed"
    },
    {
        id: 6,
        slogan: "For those who REFUSE to be deceived"
    },
    {
        id: 7,
        slogan: "Moon *landing*? The moon ITSELF is a hoax"
    }
    ],
    Store: [{
        id: 1,
        name: "Tin Foil Hat",
        price: 29.99,
        picURL: `https://media.istockphoto.com/id/1257284419/photo/aluminium-foil-hat-isolated-on-white-background-symbol-for-conspiracy-theory-and-mind-control.jpg?s=2048x2048&w=is&k=20&c=wSbUk93punBRH73U-tTVlaDfQyPumBmUSqu8AjH9n1k=`
    },
    {
        id: 2,
        name: "ChemTrail Protection Mask",
        price: 59.99,
        picURL: `https://previews.123rf.com/images/denisnata/denisnata1909/denisnata190900124/130404660-portrait-of-teen-boy-with-paper-bag-over-head-making-thumb-up-gesture-teenager-cover-head-with-bag.jpg`
    },
    {
        id: 3,
        name: "Everything You Know Is A Lie Button",
        price: 14.99,
        picURL: `https://m.media-amazon.com/images/I/61TDXFhsB2L._AC_SX569_.jpg`
    },
    {
        id: 4,
        name: "Ancient Aliens: Season 2 DVD",
        price: 13.99,
        picURL: `https://m.media-amazon.com/images/I/719H4uOOOUL._SY445_.jpg`
    },
    ]
}

export const getConspiracies = () => {
    return database.Conspiracies.map(Conspiracy => ({ ...Conspiracy }))
}
export const getSlogans = () => {
    return database.Slogans.map(slogan => ({ ...slogan }))
}
export const getStore = () => {
    return database.Store.map(item => ({ ...item }))
}
