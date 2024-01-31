import { elem } from "../../types/types";
import { getLastClassElement } from "../../utils/getLastClassElement";

export default function StepCardScript(payload: any) {
  const block: elem = getLastClassElement("step-card");
  if (block) {
    const step: elem = block.getElementsByClassName("step-card__step")[0];
    const header: elem = block.getElementsByClassName("step-card__header")[0];
    const paragraph: elem = block.getElementsByClassName(
      "step-card__paragraph"
    )[0];
    if (step && header && paragraph) {
      step.innerHTML = "Step " + (payload.step < 10 ? '0' + payload.step : payload.step);
      header.innerHTML = payload.header;
      paragraph.innerHTML = payload.paragraph;
    }
  }
}
