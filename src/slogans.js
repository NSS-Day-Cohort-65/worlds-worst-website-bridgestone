import { getSlogans } from "./database.js"

const slogans = getSlogans()
console.log(slogans)

//get a random index from the slogan array

const getRandom = (slogans) => {
    let randomNumber = ([Math.floor(Math.random()*slogans.length)])
    return randomNumber
}

const returnedRandomNumber = getRandom(slogans)

const getRandomSlogan = (returnedRandomNumber) => {
     let randomSlogan = (slogans[returnedRandomNumber])
     return randomSlogan
}

export let returnedSlogan = getRandomSlogan(returnedRandomNumber)
console.log(returnedSlogan)

