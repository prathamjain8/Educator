// Change navbar styles on scroll
// Adding event listener to listen to the scroll event on the window
// If window.scrollY > 0 (i.e., the user has scrolled down), it adds the window-scroll class and if window.scrollY === 0 (i.e., the user is at the top of the page), it removes the window-scroll class.
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show/hide faqs using JS
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    // The textContent property is used to get or set the text content of an element, including all its child nodes.
    const icon = faq.querySelector(".faq__icon span");
    if (icon.textContent.trim() === "add") {
      icon.textContent = "remove";
    } else {
      icon.textContent = "add";
    }
  });
});

// Toggle menu items
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
