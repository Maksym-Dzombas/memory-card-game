import { templateCountGame } from "../../../../consts/template-game.js";
const victoryText = document.querySelector(".victory-text");
const dashboard = document.querySelector(".wrapper");
const timeAnimation = {
    16: {
        dashboard: 1500,
        victoryText: 3000,
        reloadPage: 6000
    },
    24: {
        dashboard: 2000,
        victoryText: 3300,
        reloadPage: 6000
    },
    32: {
        dashboard: 3000,
        victoryText: 4500,
        reloadPage: 7500
    }
};
export const finishGame = () => {
    const cards = document.querySelectorAll(".card");
    // stateCards.matchedCardsCount === crypt[templateCountGame.count]
    if (true) {
        setTimeout(() => {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("victory");
                }, index * 100);
            });
            setTimeout(() => {
                dashboard.classList.add("victory");
            }, timeAnimation[templateCountGame.count].dashboard);
            setTimeout(() => {
                victoryText.classList.add("active");
            }, timeAnimation[templateCountGame.count].victoryText);
            setTimeout(() => {
                location.reload();
            }, timeAnimation[templateCountGame.count].reloadPage);
        }, 2000);
    }
};
