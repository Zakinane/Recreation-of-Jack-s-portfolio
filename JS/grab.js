// document.addEventListener("DOMContentLoaded", () => {
//   let cards = document.querySelectorAll(".card");

//   cards.forEach((image) => {
//     const originalWidth = image.style.width;
//     const originalHeight = image.style.height;
//     const src = image.src;
//     const originalRotation = image.style.rotate;

//     image.addEventListener("mousedown", () => {
//       image.style.display = "none";
//       let newImage = document.createElement("img");

//       newImage.src = "../img/jack.png";
//       newImage.style.width = originalWidth;
//       newImage.style.height = originalHeight;
//       newImage.classList.add("drag-card");
//       newImage.style.rotate = originalRotation;
//       document.body.appendChild(newImage); // -------------- stupid solution

//       document.addEventListener("mousemove", (event) => {
//         const x = event.clientX;
//         const y = event.clientY;
//         newImage.style.left = `${x}px`;
//         newImage.style.top = `${y}px`;

//         image.style.left = event.clientX + "px";
//         image.style.top = event.clientY + "px";
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll(".card");

  cards.forEach((image) => {
    image.addEventListener("mousedown", () => {
      const height = image.clientHeight;
      const width = image.clientWidth;
      image.style.top = document.pageY - height / 2 + "px";
      image.style.left = document.pageX - width / 2 + "px";
    });
  });
});
