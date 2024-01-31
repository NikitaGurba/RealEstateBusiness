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
  AboutValuesContent,
  AboutAchievementsContent,
  HeaderCardsServicesPageContent,
} from "./public/data";
import AboutValuesScript from "./components/AboutValues/index";
import BlockTabsScript from "./components/BlockTabs/index";
import { scrollAnimation } from "./utils/scrollAnimation";
import AboutAchievementsScript from "./components/AboutAchievements/index";
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
const AboutAchievements =
  require("./components/AboutAchievements/index.html").default;
const Footer = require("./components/Footer/index.html").default;

document.body.insertAdjacentHTML("beforeend", Popup);
PopupScript();

document.body.insertAdjacentHTML("beforeend", Header);
document.body.insertAdjacentHTML("beforeend", HeaderCard);
HeaderCardScript(HeaderCardContent);

document.body.insertAdjacentHTML("beforeend", HeaderCards);
HeaderCardsScript(HeaderCardsServicesPageContent);

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

document.body.insertAdjacentHTML("beforeend", AboutAchievements);
AboutAchievementsScript(AboutAchievementsContent);

document.body.insertAdjacentHTML("beforeend", Footer);

scrollAnimation();
