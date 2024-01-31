import PopupScript from "../../components/Popup/index";
import { scrollAnimation } from "../../utils/scrollAnimation";
import AboutValuesScript from "../../components/AboutValues";
import AboutAchievementsScript from "../../components/AboutAchievements";
import { AboutAchievementsContent, AboutValuesContent } from "../../public/data";

const Popup = require("../../components/Popup/index.html").default;
const Header = require("../../components/Header/index.html").default;
const AboutHead = require("../../components/AboutHead/index.html").default;
const AboutValues = require("../../components/AboutValues/index.html").default;
const AboutAchievements =
  require("../../components/AboutAchievements/index.html").default;
const Footer = require("../../components/Footer/index.html").default;

document.body.insertAdjacentHTML("beforeend", Popup);
PopupScript();

document.body.insertAdjacentHTML("beforeend", Header);

document.body.insertAdjacentHTML("beforeend", AboutHead);

document.body.insertAdjacentHTML("beforeend", AboutValues);
AboutValuesScript(AboutValuesContent);

document.body.insertAdjacentHTML("beforeend", AboutAchievements);
AboutAchievementsScript(AboutAchievementsContent);

document.body.insertAdjacentHTML("beforeend", Footer);

scrollAnimation();
