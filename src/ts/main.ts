/** @format */

// !Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header") as HTMLElement;
  const nav = document.querySelector("nav") as HTMLElement;
  const lis = document.querySelectorAll(
    ".navbar-nav li a"
  ) as NodeListOf<HTMLAnchorElement>;
  const img = document.querySelector("header img") as HTMLImageElement;

  if (window.scrollY >= 50) {
    header.classList.add("scroll");
    nav.classList.add("scroll");
    lis.forEach((li) => {
      li.classList.add("scroll");
    });
    img.src = "assets/images/logo/logo-2.svg";
  } else {
    header.classList.remove("scroll");
    nav.classList.remove("scroll");
    lis.forEach((li) => {
      li.classList.remove("scroll");
    });
    img.src = "assets/images/logo/logo.svg";
  }
});

// !Dynamically set the current URL
var currentUrl: string = window.location.pathname; // *gets the current page's path
// !You can update your logic to dynamically assign 'active' class based on the current page
function isActiveLink(href: string | null): boolean {
  if (!href) return false;

  // *Handle the case for index.html or home page ('/')
  if (href === "index.html" || href === "/") {
    return currentUrl === "/" || currentUrl === "/index.html";
  }

  // *General case for other pages
  return currentUrl.includes(href);
}

// *Add 'active' class based on current page
document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
  const href: string | null = link.getAttribute("href");
  if (isActiveLink(href)) {
    link.classList.add("active");
  }
});

// !Navbar toggler
const navbarToggler = document.querySelector(".navbar-toggler") as HTMLElement;
navbarToggler?.addEventListener("click", (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement;
  target.classList.toggle("active");
});

// !Pricing Section Select
const btns = document.querySelectorAll(
  ".pricing button"
) as NodeListOf<HTMLButtonElement>;
const conatiners = document.querySelectorAll(
  ".pricing .container"
) as NodeListOf<HTMLButtonElement>;

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    conatiners.forEach((container) => {
      container.classList.remove("active");
    });
    conatiners[index].classList.add("active");
  });
});

// !Testimonials Section
const slides = document.querySelectorAll(
  ".clients .users img"
) as NodeListOf<HTMLImageElement>;
const targets = document.querySelectorAll(
  ".clients .buttons button"
) as NodeListOf<SVGAElement>;
const titles = document.querySelectorAll(
  ".clients .datas .data"
) as NodeListOf<HTMLDivElement>;

let currIndex: number = 0;

targets.forEach((target, index) => {
  target.addEventListener("click", () => {
    currIndex = index === 0 ? currIndex - 1 : currIndex + 1;

    // Remove active class from all slides and titles
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    titles.forEach((title) => {
      title.classList.remove("active");
    });

    // Add active class to the current slide and title
    titles[Math.abs(currIndex % slides.length)].classList.add("active");
    slides[Math.abs(currIndex % slides.length)].classList.add("active");
  });
});

// ! Making Scroll To Top Button Visible
const toTop = document.getElementById("top") as HTMLSpanElement;
window.addEventListener("scroll", () => {
  window.scrollY >= 1000
    ? (toTop.style.top = "93vh")
    : (toTop.style.top = "-60px");
});
