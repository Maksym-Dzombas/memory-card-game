import { matchedCard } from "./matched-card.js";
let firstCard = null;
let secondCard = null;
export const flipCard = (event) => {
    const clickedCardElHTML = event.target;
    // const picture = clickedCardElHTML.querySelector("img") as HTMLImageElement;
    clickedCardElHTML.classList.add("flip");
    if (!firstCard)
        return firstCard = clickedCardElHTML;
    secondCard = clickedCardElHTML;
    if (firstCard === secondCard)
        return secondCard = null;
    console.log("Первая карточка: ", firstCard);
    console.log("Вторая карточка: ", secondCard);
    matchedCard(firstCard, secondCard);
};
