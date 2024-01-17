// const assetsPath = "assets/";
import { assetsPath } from "../../constants";
import { elem } from "src/types/types";
enum sourcesImg {
  "Store.svg",
  "Value.svg",
  "Building.svg",
  "Sun.svg",
}

export default function HeaderCardsScript() {
  const enumLength: number = Object.keys(sourcesImg).length / 2;
  window.addEventListener("DOMContentLoaded", () => {
    const CardIconCenter = require("../CardIconCenter/index.html").default;
    const obj: elem = document.body.getElementsByClassName("header-cards")[0];
    if (obj) {
      for (let i = 0; i < enumLength; i++) {
        obj.insertAdjacentHTML("beforeend", CardIconCenter);
      }
      const cards: Array<Element> = Array.from(
        document.body.getElementsByClassName("card-icon-center")
      );
      for (const key in sourcesImg) {
        const cardImg: HTMLImageElement | undefined =
          cards[key]?.getElementsByTagName("img")[0];
        if (cardImg) {
          cardImg.src = assetsPath + sourcesImg[key];
        }
      }
    }
  });
}
