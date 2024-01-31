import { throttle } from "./throttle";

const isInViewport = (element: Element): boolean => {
  const rect: DOMRect = element.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) * 2 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScrollAnimation = (entries: Array<Element>): void => {
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

export const scrollAnimation = () => {
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
  const func = throttle(() => handleScrollAnimation(entries), 100);
  window.addEventListener("scroll", (): void => {
    func();
  });
};
