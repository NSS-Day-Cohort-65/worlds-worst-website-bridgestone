// import conspiracies from database

import { getConspiracies } from "./database.js"

// invoke imported function and assign array to variable

const conspiracies = getConspiracies()

// export new function: conspiraciesHTML
// initiate html string: <ul>
// iterate over array
// assign each to a <li> with id="featuredtruth__list--pk#here"
// return finished HTML string

export const ConspiracyHTML = () => {
    let HTMLString = `<ul>`
    for (const conspiracy of conspiracies) {
        HTMLString += `<li id="featuredtruth__list--${conspiracy.id}">${conspiracy.quote}</li>`
    }
    return HTMLString
}