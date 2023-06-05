import { AwareWolfs } from "./AwareWolfs.js";

const mainContainer = document.querySelector("#main")

const renderAllHTML = () => {
    mainContainer.innerHTML = AwareWolfs()
}

renderAllHTML()