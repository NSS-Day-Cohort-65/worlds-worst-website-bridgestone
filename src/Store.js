// import store items from database

import { getStore } from "./database.js"

// invoke imported function and assign array to variable

const storeItems = getStore()

// export new function: storeHTML
// helper function: makes a <section> of each store item
// initiate html string: <ul>
// iterate over array
// assign each to a <li> with id="featuredtruth__list--pk#here"
// return finished HTML string

export const ConspiracyHTML = () => {
    let HTMLString = `<ul>`
    for (const item of storeItems) {
        const newItem = itemSection(item)
        HTMLString += newItem
    }
    return HTMLString
}

const itemSection = (item) => {
    let itemHTML = `<div id="store__item--${item.id}">`
    itemHTML += `   <img id="store__item--img" src="${item.picURL}">`
    itemHTML += `   <p id="store__item--name">${item.name}</p>`
    itemHTML += `   <p id="store__item--price">${item.price}</p>`
    itemHTML += `/div>`
    return itemHTML
}