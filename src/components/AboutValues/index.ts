import { elem, aboutValuesPayload } from "src/types/types";
import { getLastClassElement } from "../../utils/getLastClassElement";

import { CardIconLeftScript } from "../CardIconLeft/index";
const CardIconLeft = require("../CardIconLeft/index.html").default;

export default function AboutValuesScript(payload: aboutValuesPayload) {
  const block: elem = getLastClassElement("about-values__cards");
  if (block) {
    payload.forEach((card) => {
      block.insertAdjacentHTML("beforeend", CardIconLeft);
      CardIconLeftScript(card);
      const cardElement: elem = getLastClassElement("card-icon-left");
      if (cardElement) {
        cardElement.className = "card-icon-left-about"
      }
    });
  }
}
