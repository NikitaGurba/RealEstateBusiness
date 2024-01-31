import { elem, card } from "../../types/types";

export const CardIconLeftScript = (data: card, element?: any): void => {
  let arrayOfCards: HTMLCollection,
    card: elem,
    imgElem: HTMLImageElement | undefined,
    titleElem: elem,
    paragraphElem: elem;
  if (!element) {
    arrayOfCards = document.getElementsByClassName("card-icon-left");
    card = arrayOfCards[arrayOfCards.length - 1];
    if (card !== undefined) {
      imgElem = card.getElementsByTagName("img")[0];
      titleElem = card.getElementsByClassName("card-icon-left__text")[0];
      paragraphElem = card.getElementsByClassName(
        "card-icon-left__paragraph"
      )[0];
    }
  } else {
    imgElem = element.getElementsByTagName("img")[0];
    titleElem = element.getElementsByClassName("card-icon-left__text")[0];
    paragraphElem = element.getElementsByClassName(
      "card-icon-left__paragraph"
    )[0];
  }
  if (imgElem && titleElem && paragraphElem) {
    imgElem.src = data.src;
    titleElem.innerHTML = data.title;
    paragraphElem.innerHTML = data.paragraph;
  }
};
