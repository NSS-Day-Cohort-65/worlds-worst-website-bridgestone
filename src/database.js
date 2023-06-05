const database = {
    Conspiracies: [{
        id: 1,
        name: "Birdgeoisie",
        details: "Birds are not real. They are spy drones controlled by the goverment.🐦"
    },
    {
        id: 2,
        name: "Earthiosise",
        details: "Is earth flat, cubed, a pentagon, or hollow?!⬟"
    },
    {
        id: 3,
        name: "Bigfoot",
        details: "Everyone becomes bigfoot after they die expcept for you!👣"
    },
    {
        id: 4,
        name: "Nicolas Cage Time Traveler",
        details: "Nicolas Cage went through time and influenced major historical events.🫖"
    },
    {
        id: 5,
        name: "Municipal Water turns forgs to humans!",
        details: "Municipal water turns frogs into fully sentient human beings. the world is half populated by forg people!🐸"
    },
    {
        id: 6,
        name: "ur moms house",
        details: "The moon landing was faked and actually filmed at ur moms house 🙀"
    },
    {
        id: 7,
        name: "Wyoming",
        details: "Is Wyoming even a state(do you actually know anyone from Wyoming?)🤯🤔"
    },
    {
        id: 8,
        name: "HotBuns",
        details: "Hot dog buns were reverse engineered from aliens.👽"
    },
    {
        id: 9,
        name: "Mice v Cats",
        details: "The government have been teaching cats and mice how to communicate to take over the world!🐈🐁"
    },
    {
        id: 10,
        name: "6G",
        details: "6G caused the covid epidemic because how else would coivd have got here.😷"
    },
    {
        id: 11,
        name: "Operation Greg",
        details: "Greg is secrectly a part of the illuminati👁️"
    },
    {
        id: 12,
        name: "Trees",
        details: "Trees are actually a government 'plant' that we think we need to live.🌳"
    },
    {
        id: 13,
        name: "Epstein's island",
        details: "Amelia Earhart landed on Epstein's island🏝️"
    },
    {
        id: 14,
        name: "ChatGPT",
        details: "ChatGPT takes the info you give it and uses it to track and watch you!👀"
    },
    ],
    Slogans: [{
        id: 1,
        slogan: "Saving sheeple since 2008"
    },
    {
        id: 2,
        slogan: "Banned by the U.S. Government"
    },
    {
        id: 3,
        slogan: "For your eyes only"
    },
    {
        id: 4,
        slogan: "Wake up !!!"
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
