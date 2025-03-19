const hamburger = document.querySelector(".hamburger");

const navItemContainer = document.querySelector(".nav-item-container");

hamburger.addEventListener("click", () => {
  navItemContainer.classList.toggle("show");
});


