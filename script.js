// script.js

const header = document.querySelector("[data-header]");
if (header) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    formStatus.textContent =
      "Thank you—we have received your inquiry and will be in touch shortly.";
    contactForm.reset();
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = event.target.closest(".main-nav");
    if (!clickedInsideNav) {
      navList.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      navList.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navList.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}