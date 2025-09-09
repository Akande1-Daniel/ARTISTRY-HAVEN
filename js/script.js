const menuToogle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToogle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Hide Mobile Nav When resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navList.classList.remove("active");
    menuToogle.classList.remove("active");
  }
});

// Navigation background scroll
window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector("header");

  if (window.scrollY > 0) {
    navbar.classList.add("scroll-bar");
  } else {
    navbar.classList.remove("scroll-bar");
  }
});
