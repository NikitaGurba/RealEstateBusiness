import { throttle } from "./utils/throttle";
const handleScrollAnimation = () => {
    const entries = Array.from(document.getElementsByClassName("block"));
    entries.forEach((element, index) => {
        var _a;
        if (isInViewport(element)) {
            if (index - 1 >= 0 &&
                ((_a = entries[index - 1]) === null || _a === void 0 ? void 0 : _a.className.includes("block-animation"))) {
                if (!element.className.includes("block-animation")) {
                    element.className = element.className.replace("block-hide ", "");
                    element.className += " block-animation";
                }
            }
        }
    });
};
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
let res = throttle(handleScrollAnimation, 100);
window.addEventListener("scroll", () => {
    res();
});
//# sourceMappingURL=main.js.map