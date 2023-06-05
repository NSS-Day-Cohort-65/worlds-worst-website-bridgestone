import { AwareWolfs } from "./AwareWolfs.js";

const mainContainer = document.querySelector("#main")

const renderAllHTML = () => {
    mainContainer.innerHTML = AwareWolfs()
}

renderAllHTML()

const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Your computer's location is now hidden from the government!")
})