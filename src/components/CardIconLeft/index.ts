import {elem, card} from "../../types/types"

export const changeCardIconLeft = (data: card): void => {
  const arrayOfCards: HTMLCollection =
    document.getElementsByClassName("card-icon-left");
  const card: elem = arrayOfCards[arrayOfCards.length - 1];
  if (card !== undefined) {
    const imgElem: HTMLImageElement | undefined = card.getElementsByTagName("img")[0];
    const titleElem: elem = card.getElementsByClassName("card-icon-left__text")[0];
    const paragraphElem: elem = card.getElementsByClassName(
      "card-icon-left__paragraph"
    )[0];
    if (imgElem && titleElem && paragraphElem) {
      imgElem.src = data.src;
      titleElem.innerHTML = data.title;
      paragraphElem.innerHTML = data.paragraph;
    }
  }
};
