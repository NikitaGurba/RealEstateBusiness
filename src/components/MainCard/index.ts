import { MainCardType, elem } from "../../types/types";
import { getLastClassElement } from "../../utils/getLastClassElement";

export default function MainCardScript(payload: MainCardType) {
  const block: elem = getLastClassElement("main-card")
  if(block)
  {
    const header: elem = block.getElementsByClassName("title-with-paragraph__title")[0]
    const paragraph: elem = block.getElementsByClassName("title-with-paragraph__paragraph")[0]
    const buttonText: Element | null =  block.querySelector("main > button > span")
    if (header && paragraph && buttonText)
    {
      header.innerHTML = payload.header
      paragraph.innerHTML = payload.paragraph
      buttonText.innerHTML = payload.button
    }
  }
}