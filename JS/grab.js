document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll(".card");

  cards.forEach((image) => {
    image.addEventListener("click", () => {
      image.style.display = "none";
    });
  });
});
