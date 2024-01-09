import { throttle } from "./utils/throttle";

const handleScrollAnimation = (): void => {
  const entries: Array<Element> = Array.from(
    document.getElementsByClassName("block")
  );
  entries.forEach((element, index) => {
    if (isInViewport(element)) {
      if (
        index - 1 >= 0 &&
        entries[index - 1]?.className.includes("block-animation")
      ) {
        if (!element.className.includes("block-animation")) {
          element.className = element.className.replace("block-hide ", "");
          element.className += " block-animation";
        }
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
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
let res = throttle(handleScrollAnimation, 100);
window.addEventListener("scroll", (): void => {
  res();
});

