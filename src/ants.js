// imports the ants array of objects from database.js

import { getAnts } from "./database.js"

// exports HTML-rendering function to be placed inside HTML of AwareWolfs.js

export const Ants = () => {
    const ants = getAnts() // state variable has to be placed **inside** of component function for ants.js
    let html = `<div>`
    for (const ant of ants) {
        html += `<img src="${ant.ant}">`
    }
    return html += `</div>`
}


// export const Ants = () => {
//     const ants = getAnts() // state variable has to be placed **inside** of component function for ants.js
//     let html = `<div>`
//     const antList = ants.map(buildAntArmy)
//     html += antList.join(``)
//     html += `</div>`
// }

const buildAntArmy = (ant) => {
    return `<img src="${ant.ant}">`
}