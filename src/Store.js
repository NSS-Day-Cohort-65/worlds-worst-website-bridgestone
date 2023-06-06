// import store items from database

import { getStore } from "./database.js"

// invoke imported function and assign array to variable

const storeItems = getStore()

// export new function: storeHTML
// iterates over each item in storeItems
// for each iteration: calls the helper function below
// helper function: makes a <div> of each store item with details spelled out

export const StoreHTML = () => {
    let HTMLString
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