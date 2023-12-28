const popup: HTMLElement = document.getElementsByClassName(
  "popup"
)[0] as HTMLElement;
const popup__button: HTMLElement = document.getElementsByClassName(
  "popup__button"
)[0] as HTMLElement;
const showPopup: string | null = localStorage.getItem("popup");
if (showPopup !== "false" && popup !== undefined) {
  popup.className = popup.className.replaceAll("hide ", "");
}
const hidePopup = (): void => {
  if (popup !== undefined) {
    popup.style.marginTop = -popup.getBoundingClientRect().height + "px";
    popup__button.style.marginTop =
      -popup.getBoundingClientRect().height + "px";
    setTimeout(() => (popup.style.display = "none"), 500);
    localStorage.setItem("popup", "false");
  }
};
