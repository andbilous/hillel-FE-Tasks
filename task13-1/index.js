let numberInput = document.querySelector("#number");
let range = document.querySelector("#range");
let diagram = document.querySelector("#diagram");
let com = document.querySelector("#com");

numberInput.oninput = () => {
  range.value = numberInput.value;
};
range.oninput = () => {
  numberInput.value = range.value;
  diagram.style.height = range.value + "px";
  com.style.height = range.value * getComPercent(range.value) + "px";
};

function getComPercent(range) {
  if (range > 0 && range < 20) {
    return 0.02;
  }
  if (range >= 20 && range < 50) {
    return 0.04;
  }
  if (range >= 50 && range < 75) {
    return 0.06;
  }
  if (range >= 75 && range < 100) {
    return 0.08;
  }
}
