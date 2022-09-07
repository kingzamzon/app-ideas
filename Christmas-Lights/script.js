const lights = document.querySelectorAll(".circle");
const offBtn = document.getElementById("off");
const onBtn = document.getElementById("on");

function on() {
  lights.forEach((light) => {
    setInterval(() => {
      light.classList.toggle("active");
    }, 2000);
  });
}

on();

function off() {
  lights.forEach((light) => {
    setInterval(() => {
      light.classList.remove("active");
    }, 5000);
  });
}

onBtn.addEventListener("click", on);
offBtn.addEventListener("click", off);
