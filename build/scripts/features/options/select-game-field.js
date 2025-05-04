import { templateCountGame } from "../../../consts/template-game.js";
import { renderCards } from "../card/render-cards.js";
import { clearGame } from "../card/utils/clear-game.js";
import { getTemplateLocalStorage } from "./utils/get-template-local-storage.js";
const selectMenuElHTML = document.querySelector(".select-menu");
const optionsElHTML = document.querySelector(".options");
export const selectGameField = () => {
    selectMenuElHTML.addEventListener("mouseenter", () => {
        selectMenuElHTML.classList.add("active");
    });
    selectMenuElHTML.addEventListener("mouseleave", () => {
        selectMenuElHTML.classList.remove("active");
    });
    optionsElHTML.addEventListener("click", (event) => {
        const liElHTML = event.target;
        const spanElHTML = liElHTML.querySelector("span");
        const templateGame = Number(spanElHTML.innerText);
        localStorage.setItem("templateGame", String(templateGame));
        getTemplateLocalStorage();
        selectMenuElHTML.classList.remove("active");
        clearGame();
        renderCards(templateCountGame.count);
    });
};
