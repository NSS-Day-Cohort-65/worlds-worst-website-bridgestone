import { getSlogans } from "./database.js"

const slogans = getSlogans()
console.log(slogans)

//get a random index from the slogan array

const getRandom = (slogans) => {
    let randomNumber = ([Math.floor(Math.random() * slogans.length)])
    return randomNumber
}

const returnedRandomNumber = getRandom(slogans)

export const getRandomSlogan = () => {
    let randomSlogan = slogans[returnedRandomNumber].slogan
    return randomSlogan
}

