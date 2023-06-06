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
