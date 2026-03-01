import './style.css'
import { initSparkles } from './sparkles'

async function loadHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const res = await fetch(import.meta.env.BASE_URL + "partials/header.html");
  header.innerHTML = await res.text();

  highlightActiveNav();
}

async function loadFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  const res = await fetch(import.meta.env.BASE_URL + "partials/footer.html");
  footer.innerHTML = await res.text();
}

function highlightActiveNav() {
  const current = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navlink").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

function initAccordions() {
  document.querySelectorAll<HTMLButtonElement>(".accordion-header")
    .forEach(button => {

      button.addEventListener("click", () => {

        const accordion = button.closest(".accordion");
        const content = accordion?.querySelector(".accordion-content") as HTMLElement;

        if (!accordion || !content) return;

        accordion.classList.toggle("active");

        if (accordion.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = "0px";
        }

      });

    });
}

function initPageSpecificScripts() {
  const page = window.location.pathname.split("/").pop();

  switch(page) {

    case "projects.html":
      console.log("Projects page loaded");
      break;

    case "about.html":
      console.log("About page loaded");
      break;

    case "contact.html":
      console.log("About page loaded");
      break;


  }
}

async function bootstrap() {
  await loadHeader();
  await loadFooter();
  initSparkles('#sparkles');
  initAccordions();
  initPageSpecificScripts();
}

bootstrap();