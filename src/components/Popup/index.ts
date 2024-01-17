export default function PopupScript() {
  let popup: HTMLElement;
  window.addEventListener("DOMContentLoaded", () => {
    popup = document.getElementsByClassName("popup")[0] as HTMLElement;
    const popup_button: HTMLElement = document.getElementsByClassName(
      "popup__button"
    )[0] as HTMLElement;
    if (popup_button) {
      popup_button.addEventListener("click", () => {
        if (popup !== undefined) {
          popup.className = "popup hide-animation";
          localStorage.setItem("popup", "false");
        }
      });
    }
    const showPopup: string | null = localStorage.getItem("popup");
    if (showPopup !== "false" && popup !== undefined) {
      popup.className = popup.className.replaceAll("hide ", "");
    }
  });
}
