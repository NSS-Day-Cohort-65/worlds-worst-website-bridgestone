import { AwareWolfs } from "./AwareWolfs.js";

const mainContainer = document.querySelector("#main")

const renderAllHTML = () => {
    mainContainer.innerHTML = AwareWolfs()
}

renderAllHTML()


// hide location from gvt button
const button = document.querySelector("button");

button.addEventListener("click", () => {
    window.alert("Your computer's location is now hidden from the government!")
})


// listens for custom event, stateChanged.
// When dispatched by the database module, the main module will generate all the HTML again and display it.

document.addEventListener("stateChanged", event => { // "listens" for "stageChanged" (custom) event
    console.log("State of data has changed. Regenerating HTML...") // lots this string to console
    renderAllHTML() // calls renderAllHTML() again.
})