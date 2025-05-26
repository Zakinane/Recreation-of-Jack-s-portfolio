document.addEventListener("DOMContentLoaded", () => {

  const clock = document.getElementById("clock");
  const now = new Date();
  
  clock.textContent =  now.toLocaleTimeString(); // returns in HH:MM:SS AM/PM format
});
