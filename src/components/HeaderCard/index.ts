import { getLastClassElement } from "../../utils/getLastClassElement";
import { changeTitleParagraph } from "../../utils/TitleParagraph";
import { HeaderCardPayload } from "../../types/types"

export default function HeaderCardScript (HeaderCard: HeaderCardPayload) {
    const block: Element | undefined = getLastClassElement("header-card");
    if (block && HeaderCard[0] && HeaderCard[1]) {
      changeTitleParagraph(
        block,
        HeaderCard[0],
        HeaderCard[1]
      );
    }
  };