import { getLastClassElement } from "../../utils/getLastClassElement";
import VisitCardScript from "../VisitCard/index";

import { blockTabs, elem } from "src/types/types";

const VisitCard = require("../VisitCard/index.html").default;
export default function BlockTabsScript(payload: Array<blockTabs>) {
  const block: elem = getLastClassElement("block-tabs__cards  ");
  if (block) {
    payload.forEach((item) => {
      block.insertAdjacentHTML("beforeend", VisitCard);
      VisitCardScript(item);
    });
  }
}
