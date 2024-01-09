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
    popup.className = 'popup hide-animation';
    localStorage.setItem("popup", "false");
  }
};
