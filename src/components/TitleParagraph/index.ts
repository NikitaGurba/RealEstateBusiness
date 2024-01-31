import { getLastClassElement } from "../../utils/getLastClassElement";
import { TitleParagraph, elem } from "../../types/types";
export default function TitleParagraphScript(payload: TitleParagraph) {
  const block: elem = getLastClassElement("title-with-paragraph");
  if (block) {
    const header: elem = block.getElementsByClassName(
      "title-with-paragraph__title"
    )[0];
    const paragraph: elem = block.getElementsByClassName(
      "title-with-paragraph__paragraph"
    )[0];
    if (header && paragraph) {
      header.innerHTML = payload.header;
      paragraph.innerHTML = payload.paragraph;
    }
  }
}
