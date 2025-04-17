const bulb = document.getElementById("bulb");

let isLit = false;

bulb.addEventListener("click", () => {
  isLit = !isLit;

  if (isLit) {
    bulb.src = "on.png"; // glowing bulb
    document.body.style.backgroundColor = "black"; // dark background
  } else {
    bulb.src = "off.png"; // bulb off
    document.body.style.backgroundColor = "white"; // light background
  }
});
