import { elem, payload, card } from "src/types/types";
import { changeCardIconLeft } from "../CardIconLeft/index";
import { changeStandardBlockTitleParagraph } from "../../utils/standardBlockTitleParagraph";
import { getLastClassElement } from "../../utils/getLastClassElement";
const CardIconLeft = require("../CardIconLeft/index.html").default;
const StandardBlockCard = require("../StandardBlockCard/index.html").default;

export const changeStandardBlockCard = (
  currentElem: Element,
  block: Element,
  payload: payload
): void => {
  currentElem.insertAdjacentHTML("beforeend", StandardBlockCard);
  const cardWithButton: elem = block.getElementsByClassName(
    "standard-block__card"
  )[0];
  if (cardWithButton) {
    const cardWithButtonTitle: elem = cardWithButton.getElementsByClassName(
      "standard-block__card-title-with-paragraph-title"
    )[0];
    const cardWithButtonParagraph: elem = cardWithButton.getElementsByClassName(
      "standard-block__card-paragraph"
    )[0];
    if (cardWithButtonTitle && cardWithButtonParagraph) {
      cardWithButtonTitle.innerHTML = payload.cardWithButton.title;
      cardWithButtonParagraph.innerHTML = payload.cardWithButton.paragraph;
    }
  }
};

export const fillStandardBlockRows = (
  block: Element,
  payload: payload
): void => {
  const rows: Array<Element> = Array.from(
    block.getElementsByClassName("standard-block__row")
  );
  let cardsCounter: number = 0;
  for (let index in rows) {
    const currentElem: elem = rows[index];
    let itemAmount: number = Number.parseInt(index) === 0 ? 3 : 1;
    let renderCard: boolean = Number.parseInt(index) === 0 ? false : true;
    for (let i = 0; i < itemAmount; i++) {
      const currentCard: card | undefined = payload.cards[cardsCounter];
      if (currentElem && currentCard) {
        currentElem.insertAdjacentHTML("beforeend", CardIconLeft);
        changeCardIconLeft(currentCard);
        cardsCounter++;
      }
      if (currentElem && renderCard) {
        changeStandardBlockCard(currentElem, block, payload);
      }
    }
  }
};

export const changeStandardBlock = (payload: payload): void => {
  const block = getLastClassElement("standard-block");
  if (block) {
    changeStandardBlockTitleParagraph(
      block,
      [payload.title, payload.paragraph],
      ["title-with-paragraph__title", "title-with-paragraph__paragraph"]
    );
    fillStandardBlockRows(block, payload);
  }
};
