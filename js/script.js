// toggle class active hamburgermenu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambergermenu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active searchform
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const sb = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// klik luar untuk menghilangkan menu

const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// klik luar untuk menghilangkan menu

// checkout box

const itemCheckout = document.querySelector("#checkout-detail");

const itemProduct = document.querySelector(".menu-card-img1");

itemProduct.onclick = (e) => {
  itemCheckout.style.display = "flex";
  e.preventDefault();
};

// klik tombol close
document.querySelector(".checkout .close-icon").onclick = (e) => {
  itemCheckout.style.display = "none";
  e.preventDefault();
};
