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
  BlockTabsContent,
} from "./public/data";
import { throttle } from "./utils/throttle";
import AboutValuesScript from "./components/AboutValues/index";
import BlockTabsScript from "./components/BlockTabs/index";
import { assetsPath } from "./constants";
const Popup = require("./components/Popup/index.html").default;
const Header = require("./components/Header/index.html").default;
const HeaderCards = require("./components/HeaderCards/index.html").default;
const HeaderCard = require("./components/HeaderCard/index.html").default;
const MainCard = require("./components/MainCard/index.html").default;
const StandardBlock = require("./components/StandardBlock/index.html").default;
const StandardBlockLeft =
  require("./components/StandardBlockLeft/index.html").default;
const ContactForm = require("./components/ContactForm/index.html").default;
const BlockTabs = require("./components/BlockTabs/index.html").default;
const Gallery = require("./components/Gallery/index.html").default;
const AboutHead = require("./components/AboutHead/index.html").default;
const AboutValues = require("./components/AboutValues/index.html").default;
const Footer = require("./components/Footer/index.html").default;

const AboutValuesContent = [
  {
    src: assetsPath + "PlainStar.svg",
    title: "Trust",
    paragraph:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    src: assetsPath + "PlainHat.svg",
    title: "Excellence",
    paragraph:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    src: assetsPath + "PlainGroup.svg",
    title: "Client-Centric",
    paragraph:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    src: assetsPath + "PlainStar.svg",
    title: "Our Commitment",
    paragraph:
      "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
];

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
document.body.insertAdjacentHTML("beforeend", ContactForm);

document.body.insertAdjacentHTML("beforeend", BlockTabs);
BlockTabsScript(BlockTabsContent);

document.body.insertAdjacentHTML("beforeend", Gallery);
document.body.insertAdjacentHTML("beforeend", AboutHead);

document.body.insertAdjacentHTML("beforeend", AboutValues);
AboutValuesScript(AboutValuesContent);

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
        element.className = element.className.replace(
          "block-hide",
          "block-animation"
        );
      }
    }
  });
};
function isInViewport(element: Element): boolean {
  const rect: DOMRect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 100 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let func = throttle(handleScrollAnimation, 100);
window.addEventListener("scroll", (): void => {
  func();
});
