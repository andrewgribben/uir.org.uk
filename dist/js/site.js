import { renderFooter, renderHeader } from "./ui.js";

const page = document.body.dataset.page || "home";
const header = document.querySelector("[data-site-header]");
const footer = document.querySelector("[data-site-footer]");
if (header) header.innerHTML = renderHeader(page);
if (footer) footer.innerHTML = renderFooter();

const toggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".primary-navigation");
if (toggle && navigation) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("is-open", !open);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      toggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
      toggle.focus();
    }
  });
}
