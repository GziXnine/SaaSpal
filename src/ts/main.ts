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
document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
  const href: string | null = link.getAttribute("href");
  if (href && currentUrl.includes(href)) {
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
  ".clients .buttons i"
) as NodeListOf<SVGAElement>;
let currIndex: number = 0;

console.log(targets);
let dynIndex: number = 0;
currIndex = 0;

targets.forEach((target, index) => {
  target.addEventListener("click", () => {
    dynIndex = index === 0 ? dynIndex - 1 : dynIndex + 1;
    console.log(dynIndex);
  });
});

slides[0].classList.remove("active");
slides[1].classList.add("active");
console.log(slides[0]);
console.log(slides[1]);
console.log(slides[2]);
