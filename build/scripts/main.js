import { templateCountGame } from "../consts/template-game.js";
import { flipCard } from "./features/card/flip-card.js";
import { renderCards } from "./features/card/render-cards.js";
import { generateCards } from "./features/card/utils/generate-cards-data.js";
import { selectGameField } from "./features/options/select-game-field.js";
import { getTemplateLocalStorage } from "./features/options/utils/get-template-local-storage.js";
const startApp = () => {
    getTemplateLocalStorage();
    generateCards(templateCountGame.count);
    renderCards(templateCountGame.count);
    flipCard();
    selectGameField();
};
startApp();
