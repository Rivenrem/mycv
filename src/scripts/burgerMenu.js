document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("burger-button").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("open-meny");
  });
});
