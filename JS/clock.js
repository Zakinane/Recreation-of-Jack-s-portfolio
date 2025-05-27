  // first
  const clock = document.getElementById("clock");

  function getTime() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString() + " GMT+1"; // returns in HH:MM:SS format
  }

  getTime();

  //then
  const intervalID = setInterval(getTime, 1000);
