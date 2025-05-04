import { matchedCard } from "./matched-card.js";
const cardsListElHTML = document.querySelector(".cards");
export const stateCards = {
    firstClickedCard: null,
    secondClickedCard: null,
    disableDesk: false,
    matchedCardsCount: 0
};
export const flipCard = () => {
    cardsListElHTML.addEventListener("click", (event) => {
        let clickedCard = event.target;
        if (stateCards.disableDesk)
            return;
        if (clickedCard.classList.contains("flip")) {
            stateCards.secondClickedCard = null;
            return;
        }
        clickedCard.classList.add("flip");
        if (!stateCards.firstClickedCard) {
            stateCards.firstClickedCard = clickedCard;
            return;
        }
        stateCards.secondClickedCard = clickedCard;
        stateCards.disableDesk = true;
        matchedCard();
    });
};
