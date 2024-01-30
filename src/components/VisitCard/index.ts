import { getLastClassElement } from "../../utils/getLastClassElement";
import { elem } from "src/types/types";

export default function VisitCardScript(payload: any) {
  const block: elem = getLastClassElement("visit-card");
  if (block) {
    const type: elem = block.getElementsByClassName("visit-card__type")[0];
    const header: elem = block.getElementsByClassName("visit-card__header")[0];
    const paragraph: elem = block.getElementsByClassName(
      "visit-card__paragraph"
    )[0];
    const buttons: Array<elem> = Array.from(
      block.getElementsByClassName("icon-item")
    );

    if (type && header && paragraph && buttons) {
      type.innerHTML = payload.type;
      header.innerHTML = payload.header;
      paragraph.innerHTML = payload.paragraph;
      buttons.forEach((button, index) => {
        const span = button?.getElementsByTagName("span")[0];
        if (span) {
          span.innerHTML = payload.buttons[index];
        }
      });
    }
  }
}
