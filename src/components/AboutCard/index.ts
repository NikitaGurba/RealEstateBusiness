import { getLastClassElement } from "src/utils/getLastClassElement";
import { elem } from "src/types/types";

export default function AboutCardScript (AboutCardContent: any) {
  const block: elem = getLastClassElement("about-card");
  if (block) {
    const img: elem = block.getElementsByClassName("about-card__img")[0]?.getElementsByTagName("img")[0]
    const header: elem = block.getElementsByClassName("about-card__header")[0]
    const paragraph: elem = block.getElementsByClassName("about-card__parapgraph")[0]
    if (img && header && paragraph)
    {
      img.setAttribute("src", AboutCardContent.img);
      header.innerHTML = AboutCardContent.header
      paragraph.innerHTML = AboutCardContent.paragraph
    }
  }
}