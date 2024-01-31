import { TitleParagraph, elem } from "../../types/types"
import { getLastClassElement } from "../../utils/getLastClassElement";


export default function GenericCardScript(payload: TitleParagraph) {
  const block: elem = getLastClassElement("generic-card")
  if (block)
  {
    const header = block.getElementsByClassName("generic-card__header")[0]
    const paragraph = block.getElementsByClassName("generic-card__paragraph")[0]
    if (header && paragraph)
    {
      header.innerHTML = payload.header
      paragraph.innerHTML = payload.paragraph
    }    
  }
}