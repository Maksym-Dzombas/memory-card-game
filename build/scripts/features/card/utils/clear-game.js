import { cryptTemplate } from "../render-cards.js";
const cardsListElHTML = document.querySelector(".cards");
const dashboard = document.querySelector(".wrapper");
export const clearGame = () => {
    cardsListElHTML.innerHTML = null;
    for (const [key, className] of Object.entries(cryptTemplate)) {
        if (cardsListElHTML.classList.contains(className)) {
            dashboard.classList.remove(className);
            cardsListElHTML.classList.remove(className);
            return;
        }
    }
};
