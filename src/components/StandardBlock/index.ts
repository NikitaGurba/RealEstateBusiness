import { elem, payload, card } from "src/types/types";
import { CardIconLeftScript } from "../CardIconLeft/index";
import { changeTitleParagraph } from "../../utils/TitleParagraph";
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

  const mobileLayout: elem = block.getElementsByClassName(
    "standard-block__row-mobile"
  )[0];
  if (mobileLayout) {
    payload.cards.forEach((item, index) => {
      mobileLayout.insertAdjacentHTML("beforeend", CardIconLeft);
      CardIconLeftScript(
        item,
        mobileLayout.getElementsByClassName("card-icon-left")[index]
      );
    });
    changeStandardBlockCard(mobileLayout, block, payload);
  }
  
  const rows: Array<Element> = Array.from(
    block.getElementsByClassName("standard-block__row")
  );
  let cardsCounter: number = 0;
  for (let index in rows) {
    const currentElem: elem =
      Number.parseInt(index) === 0
        ? rows[index]?.getElementsByClassName("splide__list")[0]
        : rows[index];
    let itemAmount: number = Number.parseInt(index) === 0 ? 3 : 1;
    let renderCard: boolean = Number.parseInt(index) === 0 ? false : true;
    for (let i = 0; i < itemAmount; i++) {
      const currentCard: card | undefined = payload.cards[cardsCounter];
      if (currentElem && currentCard) {
        const CardIconLeftLi = CardIconLeft.replace(
          '<div class="card-icon-left">',
          '<li class="card-icon-lef-standard-block splide__slide">'
        ).replace(
          "</div>\n  </body>\n</html>\n",
          "</li>\n  </body>\n</html>\n"
        );
        currentElem.insertAdjacentHTML("beforeend", CardIconLeftLi);
        CardIconLeftScript(
          currentCard,
          currentElem.getElementsByClassName("splide__slide")[
            itemAmount === 1 ? 0 : cardsCounter
          ]
        );
        cardsCounter++;
        if (cardsCounter === 3) {
          currentElem.insertAdjacentHTML("beforeend", CardIconLeftLi);
          const firstCard: card | undefined = payload.cards[0];
          if (firstCard) {
            CardIconLeftScript(
              firstCard,
              currentElem.getElementsByClassName("splide__slide")[cardsCounter]
            );
          }
        }
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
    changeTitleParagraph(
      block,
      [payload.title, payload.paragraph],
      ["title-with-paragraph__title", "title-with-paragraph__paragraph"]
    );
    fillStandardBlockRows(block, payload);
  }
};

declare class Splide {
  constructor(str: string | Element, obj: any);
  mount(): void;
}

export default function StandardBlockScript(payload: payload) {
  changeStandardBlock(payload);
  const block = getLastClassElement("standard-block");
  const row = block ? block.getElementsByClassName("splide")[0] : undefined;
  if (row) {
    new Splide(row, {
      type: "loop",
      autoplay: "play",
      perPage: 3,
      perMove: 1,
    }).mount();
  }
}
