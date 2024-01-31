import PopupScript from "../../components/Popup/index";
import HeaderCardsScript from "../../components/HeaderCards/index";
import HeaderCardScript from "../../components/HeaderCard/index";
import MainCardScript from "../../components/MainCard/index";
import { HeaderCardContent, BlockTabsContent, MainCardContactPageContent, HeaderCardsContactPageContent } from "../../public/data";
import BlockTabsScript from "../../components/BlockTabs/index";
import { scrollAnimation } from "../../utils/scrollAnimation";

const Popup = require("../../components/Popup/index.html").default;
const Header = require("../../components/Header/index.html").default;
const HeaderCards = require("../../components/HeaderCards/index.html").default;
const HeaderCard = require("../../components/HeaderCard/index.html").default;
const ContactForm = require("../../components/ContactForm/index.html").default;
const BlockTabs = require("../../components/BlockTabs/index.html").default;
const Gallery = require("../../components/Gallery/index.html").default;
const MainCard = require("../../components/MainCard/index.html").default;
const Footer = require("../../components/Footer/index.html").default;

document.body.insertAdjacentHTML("beforeend", Popup);
PopupScript();

document.body.insertAdjacentHTML("beforeend", Header);
document.body.insertAdjacentHTML("beforeend", HeaderCard);
HeaderCardScript(HeaderCardContent);

document.body.insertAdjacentHTML("beforeend", HeaderCards);
HeaderCardsScript(HeaderCardsContactPageContent);

document.body.insertAdjacentHTML("beforeend", ContactForm);

document.body.insertAdjacentHTML("beforeend", BlockTabs);
BlockTabsScript(BlockTabsContent);

document.body.insertAdjacentHTML("beforeend", Gallery);
document.body.insertAdjacentHTML("beforeend", MainCard);
MainCardScript(MainCardContactPageContent);

document.body.insertAdjacentHTML("beforeend", Footer);

scrollAnimation();
