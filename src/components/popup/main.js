var popup = document.getElementsByClassName("popup")[0];
var popup__button = document.getElementsByClassName("popup__button")[0];
var showPopup = localStorage.getItem("popup");
if (showPopup !== "false" && popup !== undefined) {
    popup.className = popup.className.replaceAll("hide ", "");
}
var hidePopup = function () {
    if (popup !== undefined) {
        popup.style.marginTop = -popup.getBoundingClientRect().height + "px";
        popup__button.style.marginTop =
            -popup.getBoundingClientRect().height + "px";
        setTimeout(function () { return (popup.style.display = "none"); }, 500);
        localStorage.setItem("popup", "false");
    }
};
