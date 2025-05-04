import { crypt } from "../../../../consts/template-game.js";
import { gemsImage } from "../../../../consts/gems-image.js";
import { urlImages } from "../../../../consts/url-images.js";
import { cardsGemStore } from "../../../../store/cards.js";
import { randomlyArray } from "./randomly-array.js";
export const generateCards = (count) => {
    const cardsGem = [];
    const randomImagesGem = randomlyArray(gemsImage);
    console.log(randomImagesGem);
    for (let index = 0; index < crypt[count]; index++) {
        const cardGem = {
            id: index + 1,
            name: `gem-${index + 1}`,
            image: urlImages + "gems/" + randomImagesGem[index]
        };
        cardsGem.push(cardGem);
    }
    for (let index = 0; index < crypt[count]; index++) {
        const cardGem = {
            id: index + 1,
            name: `gem-${index + 1}`,
            image: urlImages + "gems/" + randomImagesGem[index]
        };
        cardsGem.push(cardGem);
    }
    cardsGemStore.cardsGem = cardsGem;
    return count;
};
