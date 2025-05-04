import { finishGame } from "./finish-game.js";
import { stateCards } from "./flip-card.js";
export const matchedCard = () => {
    if (!stateCards.firstClickedCard || !stateCards.secondClickedCard)
        return;
    if (stateCards.firstClickedCard?.id === stateCards.secondClickedCard?.id) {
        stateCards.firstClickedCard?.classList.add("flip");
        stateCards.secondClickedCard?.classList.add("flip");
        stateCards.matchedCardsCount++;
        finishGame();
        stateCards.firstClickedCard = null;
        stateCards.secondClickedCard = null;
        setTimeout(() => stateCards.disableDesk = false, 800);
    }
    else {
        setTimeout(() => {
            stateCards.firstClickedCard?.classList.add("shake");
            stateCards.secondClickedCard?.classList.add("shake");
            setTimeout(() => {
                stateCards.firstClickedCard?.classList.remove("flip", "shake");
                stateCards.secondClickedCard?.classList.remove("flip", "shake");
                stateCards.firstClickedCard = null;
                stateCards.secondClickedCard = null;
                stateCards.disableDesk = false;
            }, 400);
        }, 600);
    }
};
