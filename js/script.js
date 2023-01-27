// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu ham di klik
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

const ham = document.querySelector("#ham-menu");
document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
