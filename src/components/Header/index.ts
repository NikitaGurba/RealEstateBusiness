import { elem } from "../../types/types";
import { getLastClassElement } from "../../utils/getLastClassElement";

export default function HeaderScript() {
  let page: string[] | undefined = window.location.pathname.split("/");
  let pageName: string | undefined;
  const block: elem = getLastClassElement("header")
  if (page && block) {
    pageName = page[page.length - 1]?.replace('.html', '');
    const navBar: Array<elem> = Array.from(block.getElementsByClassName("text-button"))
    if (navBar)
    {
      navBar.forEach(element => {
        if (element && element.id === pageName)
        {
          element.className = "button"
        }
      })
    }
    
  }
}
