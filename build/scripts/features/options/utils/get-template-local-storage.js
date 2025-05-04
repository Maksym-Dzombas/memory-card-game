import { templateCountGame } from "../../../../consts/template-game.js";
export const getTemplateLocalStorage = () => {
    const template = localStorage.getItem("templateGame");
    if (!template)
        return;
    templateCountGame.count = template;
    return template;
};
