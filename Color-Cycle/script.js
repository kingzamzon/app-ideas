let userInput = document.querySelector("#inputColor");
let submitBtn = document.querySelector("#submitBtn");
let isPaused = false;

function changeBg(color) {
  let bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = `rgb(${color})`;
}

let bgInterval = setInterval(() => {
  if (!isPaused) {
    incrementBg();
  }
}, 250);

submitBtn.addEventListener("dblclick", () => {
  isPaused = true;
});

submitBtn.addEventListener("click", () => {
  isPaused = false;
  changeBg(userInput.value);
});

function incrementBg() {
  inputArr = userInput.value.split(",");
  if (inputArr.length > 2) {
    parseInt(inputArr[0]) >= 255
      ? (inputRed = 0)
      : (inputRed = parseInt(inputArr[0]) + 5);

    parseInt(inputArr[1]) >= 255
      ? (inputGreen = 0)
      : (inputGreen = parseInt(inputArr[1]) + 15);

    parseInt(inputArr[2]) >= 255
      ? (inputBlue = 0)
      : (inputBlue = parseInt(inputArr[2]) + 1);

    inputArr = [inputRed, inputGreen, inputBlue];

    userInput.value = inputArr;
    changeBg(inputArr);
  }
}
incrementBg();
