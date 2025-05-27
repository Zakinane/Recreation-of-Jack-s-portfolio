document.addEventListener("DOMContentLoaded", () => {

  const clock = document.getElementById("clock");
  const now = new Date();
  
  clock.textContent =  now.toLocaleTimeString() + " GMT+1"; // returns in HH:MM:SS format
});
