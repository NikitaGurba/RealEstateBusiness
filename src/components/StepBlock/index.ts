import { elem } from "../../types/types";
import { getLastClassElement } from "../../utils/getLastClassElement";
import TitleParagraphScript from "../TitleParagraph/index";
import StepCardScript from "../StepCard/index";

const TitleParagraph = require("../TitleParagraph/index.html").default;
const StepCard = require("../StepCard/index.html").default;
export default function StepBlockScript(
  payload: any
) {
  const block: elem = getLastClassElement("step-block");
  if (block) {
    block.insertAdjacentHTML("afterbegin", TitleParagraph);
    TitleParagraphScript(payload.titleParagraph);
    const cardsElement: elem = block.getElementsByClassName(
      "step-block__cards"
    )[0];
    if (cardsElement) {
      payload.cards.forEach((card: any) => {
        cardsElement.insertAdjacentHTML("beforeend", StepCard);
        StepCardScript(card);
      });
    }
  }
}
