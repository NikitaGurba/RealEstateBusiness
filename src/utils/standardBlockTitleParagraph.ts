import {elem} from "../types/types"

export const changeStandardBlockTitleParagraph = (
  block: Element,
  content: string[],
  classList: string[]
): void => {
  if (classList[0] && classList[1] && content[0] && content[1]) {
    const title: elem = block.getElementsByClassName(classList[0])[0];
    const paragraph: elem = block.getElementsByClassName(classList[1])[0];
    if (title && paragraph) {
      title.innerHTML = content[0];
      paragraph.innerHTML = content[1];
    }
  }
};
