
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    menuButton.textContent = "☰";
  } else {
    nav.style.display = "flex";
    menuButton.textContent = "✖";
  }
});
