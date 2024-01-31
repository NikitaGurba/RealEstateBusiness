import { HeaderCardType, elem } from "../../types/types";

const CardIconCenter = require("../CardIconCenter/index.html").default;
export default function HeaderCardsScript(payload: Array<HeaderCardType>) {
  const block: elem = document.body.getElementsByClassName("header-cards")[0];
  if (block) {
    for (let i = 0; i < payload.length; i++) {
      block.insertAdjacentHTML("beforeend", CardIconCenter);
    }
    const cards: Array<Element> = Array.from(
      document.body.getElementsByClassName("card-icon-center")
    );
    payload.forEach((item, index) => {
      const cardImg: HTMLImageElement | undefined =
        cards[index]?.getElementsByTagName("img")[0];
      const header: elem = cards[index]?.getElementsByClassName(
        "card-icon-center__text"
      )[0];
      if (cardImg && header) {
        cardImg.setAttribute("src", item.src);
        header.innerHTML = item.header
      }
    });
  }
}
