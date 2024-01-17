import { elem, payload, card } from "src/types/types";
import { changeCardIconLeft } from "../CardIconLeft/index";
import { changeStandardBlockTitleParagraph } from "../../utils/standardBlockTitleParagraph";
import { getLastClassElement } from "../../utils/getLastClassElement";
const CardIconLeft = require("../CardIconLeft/index.html").default;

export const fillStandardBlockLeftRows = (
  block: Element,
  payload: payload
): void => {
  const rows: Array<Element> = Array.from(
    block.getElementsByClassName("standard-block-left__container-row")
  );
  let cardsCounter: number = 0;
  for (let index in rows) {
    const currentElem: elem = rows[index];
    for (let i = 0; i < 2; i++) {
      const currentCard: card | undefined = payload.cards[cardsCounter];
      if (currentElem && currentCard) {
        currentElem.insertAdjacentHTML("beforeend", CardIconLeft);
        changeCardIconLeft(currentCard);
        cardsCounter++;
      }
    }
  }
};

export const changeStandardBlockLeft = (payload: payload): void => {
  const block: elem = getLastClassElement("standard-block-left");
  if (block) {
    changeStandardBlockTitleParagraph(
      block,
      [payload.title, payload.paragraph],
      [
        "standard-block-left__title-with-paragraph__title",
        "standard-block-left__title-with-paragraph__paragraph",
      ]
    );
    fillStandardBlockLeftRows(block, payload);
    changeStandardBlockTitleParagraph(
      block,
      [payload.cardWithButton.title, payload.cardWithButton.paragraph],
      [
        "standard-block-left__card-title-with-paragraph-title",
        "standard-block-left__card-paragraph",
      ]
    );
  }
};
