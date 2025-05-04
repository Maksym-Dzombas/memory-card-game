export const createGemCard = (id, name, image) => {
    const gemElementHTML = `
  <li id=${id} class="card">
    <div class="view front-view">
      <span class="material-symbols-outlined">
        question_mark
      </span>
    </div>
    <div class="view back-view">
      <img src="${image}" alt="${name}">
    </div>
  </li>
`;
    return gemElementHTML;
};
