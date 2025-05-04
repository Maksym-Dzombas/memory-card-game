import { cardsGemStore } from "../../../store/cards.js";
import { createGemCard } from "./utils/create-gem-card.js";
import { generateCards } from "./utils/generate-cards-data.js";
import { randomlyArray } from "./utils/randomly-array.js";
const cardsListElHTML = document.querySelector(".cards");
const dashboard = document.querySelector(".wrapper");
export const cryptTemplate = {
    16: "template-16",
    24: "template-24",
    32: "template-32"
};
export const renderCards = (count) => {
    generateCards(count);
    const randomCardsGem = randomlyArray(cardsGemStore.cardsGem);
    randomCardsGem.forEach(card => {
        const cardElHTML = createGemCard(card.id, card.name, card.image);
        cardsListElHTML.insertAdjacentHTML("beforeend", cardElHTML);
    });
    dashboard.classList.add(cryptTemplate[count]);
    cardsListElHTML.classList.add(cryptTemplate[count]);
};
