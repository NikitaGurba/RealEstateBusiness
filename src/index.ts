import PopupScript from "./components/Popup/index";
import HeaderCardsScript from "./components/HeaderCards/index";
import { changeStandardBlock } from "./components/StandardBlock/index";
import { changeStandardBlockLeft } from "./components/StandardBlockLeft/index";
import {
  StandardBlock1,
  StandardBlock2,
  StandardBlockLeft1,
} from "./public/data";

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

document.body.insertAdjacentHTML("beforeend", HeaderCards);
HeaderCardsScript();

document.body.insertAdjacentHTML("beforeend", StandardBlock);
changeStandardBlock(StandardBlock1);

document.body.insertAdjacentHTML("beforeend", StandardBlock);
changeStandardBlock(StandardBlock2);

document.body.insertAdjacentHTML("beforeend", StandardBlockLeft);
changeStandardBlockLeft(StandardBlockLeft1);

document.body.insertAdjacentHTML("beforeend", MainCard);
document.body.insertAdjacentHTML("beforeend", Footer);

// import { throttle } from "./utils/throttle";

// const handleScrollAnimation = (): void => {
//   const entries: Array<Element> = Array.from(
//     document.getElementsByClassName("block")
//   );
//   entries.forEach((element, index) => {
//     if (isInViewport(element)) {
//       if (
//         index - 1 >= 0 &&
//         entries[index - 1]?.className.includes("block-animation")
//       ) {
//         if (!element.className.includes("block-animation")) {
//           element.className = element.className.replace("block-hide ", "");
//           element.className += " block-animation";
//         }
//       }
//     }
//   });
// };
// function isInViewport(element: Element): boolean {
//   const rect: DOMRect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
// let res = throttle(handleScrollAnimation, 100);
// window.addEventListener("scroll", (): void => {
//   res();
// });
