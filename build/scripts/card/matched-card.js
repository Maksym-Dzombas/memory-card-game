export const matchedCard = (firstCard, secondCard) => {
    let firstCardImageElHTML = firstCard === null || firstCard === void 0 ? void 0 : firstCard.querySelector("img");
    let secondCardImageElHTML = secondCard === null || secondCard === void 0 ? void 0 : secondCard.querySelector("img");
    console.log(firstCardImageElHTML.src);
    console.log(secondCardImageElHTML.src);
};
