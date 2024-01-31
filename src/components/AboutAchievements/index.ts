import { AboutAchievementsContent, elem } from "../../types/types";
import { getLastClassElement } from "../../utils/getLastClassElement";
import TitleParagraphScript from "../TitleParagraph/index";
import GenericCardScript from "../GenericCard/index";

const TitleParagraph = require("../TitleParagraph/index.html").default;
const GenericCard = require("../GenericCard/index.html").default;
export default function AboutAchievementsScript(
  payload: AboutAchievementsContent
) {
  const block: elem = getLastClassElement("about-achievements");
  if (block) {
    block.insertAdjacentHTML("afterbegin", TitleParagraph);
    TitleParagraphScript(payload.titleParagraph);
    const cardsElement: elem = block.getElementsByClassName(
      "about-achievements__cards"
    )[0];
    if (cardsElement) {
      payload.cards.forEach((card) => {
        cardsElement.insertAdjacentHTML("beforeend", GenericCard);
        GenericCardScript(card);
      });
    }
  }
}
