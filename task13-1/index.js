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
  let comPercent;
  let com = {
    0.02: new RegExp([0 - 9] | (1)[0 - 9]),
    0.04: new RegExp([23][0 - 9] | (4)[0 - 9]),
    0.06: new RegExp([56][0 - 9] | (7)[0 - 4]),
    0.08: new RegExp((7)[5 - 9] | [89][0 - 9])
  };
  Object.values(com).forEach(regex => {
    if (regex.test(range)) {
      comPercent = Object.keys(com).find(percent => com[percent] === regex);
    }
  });
  return comPercent;
}
