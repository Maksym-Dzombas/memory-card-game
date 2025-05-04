import { gemsImage } from "../../../../consts/gems-image.js";
import { urlImages } from "../../../../consts/url-images.js";
import { cardsGemStore } from "../../../../store/cards.js";
export const generateCards = (count) => {
    const cardsGem = [];
    const crypt = {
        16: 8,
        24: 12
    };
    for (let index = 0; index < crypt[count]; index++) {
        const cardGem = {
            id: index + 1,
            name: `gem-${index + 1}`,
            image: urlImages + "gems/" + gemsImage[index]
        };
        cardsGem.push(cardGem);
    }
    for (let index = 0; index < crypt[count]; index++) {
        const cardGem = {
            id: index + 1,
            name: `gem-${index + 1}`,
            image: urlImages + "gems/" + gemsImage[index]
        };
        cardsGem.push(cardGem);
    }
    cardsGemStore.cardsGem = cardsGem;
    return count;
};
