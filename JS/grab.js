document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card img");

  let draggedImage = null;
  let newImage = null;

  let xClicked = 0;
  let yClicked = 0;

  let originalX = 0;
  let originalY = 0;

  cards.forEach((image) => {
    const style = getComputedStyle(image);
    const originalWidth = style.width;
    const originalHeight = style.height;
    const src = image.src;
    const originalRotation = getComputedStyle(image.parentElement).rotate;

    image.addEventListener("mousedown", (event) => {
      if (draggedImage) return;

      draggedImage = image;

      const rect = image.getBoundingClientRect();

      // Position where inside the image the user clicked
      xClicked = event.clientX - rect.left;
      yClicked = event.clientY - rect.top;

      originalX = rect.left;
      originalY = rect.top;

      newImage = document.createElement("img");

      newImage.src = src;
      newImage.classList.add("drag-card");

      newImage.style.width = originalWidth;
      newImage.style.height = originalHeight;
      newImage.style.rotate = originalRotation;

      newImage.style.position = "fixed";

      newImage.style.left = `${event.clientX + 9 -  xClicked}px`;
      newImage.style.top = `${event.clientY + 10 - yClicked}px`;

      document.body.appendChild(newImage);

      image.style.display = "none";
    });
  });

  document.addEventListener("mousemove", (event) => {
    if (!draggedImage || !newImage) return;

    newImage.style.left = `${event.clientX - xClicked}px`;
    newImage.style.top = `${event.clientY - yClicked}px`;
  });

  document.addEventListener("mouseup", () => {
    if (!draggedImage || !newImage) return;

    newImage.style.left = `${originalX + 9}px`;
    newImage.style.top = `${originalY + 10}px`;

    setTimeout(() => {
      newImage.remove();

      draggedImage.style.display = "";

      newImage = null;
      draggedImage = null;
    }, 300);
  });
});
