import PopupScript from "./components/Popup/index";
import HeaderCardsScript from "./components/HeaderCards/index";
import HeaderCardScript from "./components/HeaderCard/index";
import StandardBlockScript from "./components/StandardBlock/index";
import { changeStandardBlockLeft } from "./components/StandardBlockLeft/index";
import {
  StandardBlock1,
  StandardBlock2,
  StandardBlockLeft1,
  HeaderCardContent,
} from "./public/data";
import { throttle } from "./utils/throttle";

const Popup = require("./components/Popup/index.html").default;
const Header = require("./components/Header/index.html").default;
const HeaderCards = require("./components/HeaderCards/index.html").default;
const HeaderCard = require("./components/HeaderCard/index.html").default;
const MainCard = require("./components/MainCard/index.html").default;
const StandardBlock = require("./components/StandardBlock/index.html").default;
const StandardBlockLeft =
  require("./components/StandardBlockLeft/index.html").default;
const Footer = require("./components/Footer/index.html").default;

document.body.insertAdjacentHTML("beforeend", Popup);
PopupScript();

document.body.insertAdjacentHTML("beforeend", Header);
document.body.insertAdjacentHTML("beforeend", HeaderCard);
HeaderCardScript(HeaderCardContent);

document.body.insertAdjacentHTML("beforeend", HeaderCards);
HeaderCardsScript();

document.body.insertAdjacentHTML("beforeend", StandardBlock);
StandardBlockScript(StandardBlock1);

document.body.insertAdjacentHTML("beforeend", StandardBlock);
StandardBlockScript(StandardBlock2);

document.body.insertAdjacentHTML("beforeend", StandardBlockLeft);
changeStandardBlockLeft(StandardBlockLeft1);

document.body.insertAdjacentHTML("beforeend", MainCard);
document.body.insertAdjacentHTML("beforeend", Footer);

let entries: Array<Element> = Array.from(document.body.children);
entries = entries.filter(
  (item) =>
    !(item instanceof HTMLScriptElement || item instanceof HTMLLinkElement)
);
entries.forEach((element, index) => {
  element.className += " block";
  if (index > 3) {
    element.className += " block-hide";
  }
});

const handleScrollAnimation = (): void => {
  entries.forEach((element) => {
    if (isInViewport(element)) {
      if (element.className.includes("block-hide")) {
        element.className = element.className.replace("block-hide ", "");
        element.className += " block-animation";
      }
    }
  });
};
function isInViewport(element: Element): boolean {
  const rect: DOMRect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +100 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let func = throttle(handleScrollAnimation, 100);
window.addEventListener("scroll", (): void => {
  func();
});
