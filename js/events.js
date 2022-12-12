/* events */
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");
const btnCalculate = document.querySelector("#btn-calculate");
result.style.display = "none";

// form 1. catch events
const calculate = () => {
  const valNum1 = Number(num1.value);
  const valNum2 = Number(num2.value);
  result.style.display = "";
  result.innerHTML = `${valNum1} + ${valNum2} = ${valNum1 + valNum2}`;
  console.log(valNum1 + valNum2);
};

// form2. catch events
btnCalculate.addEventListener("click", calculate);

/* multiplication */
const num1Mul = document.querySelector("#num1Mul");
const num2Mul = document.querySelector("#num2Mul");
const resultMul = document.querySelector("#resultMul");
const btnMult = document.querySelector("#btn-calculate-mul");
resultMul.style.display = "none";
const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const formData = form.elements;
  let result = [];

  for (const elm of formData) {
    if (elm.value > 0) result.push(elm.value);
  }
  const mul = result.reduce((value, iterator) => value * iterator, 1);
  resultMul.style.display = "";
  resultMul.innerHTML = `${num1Mul.value} * ${num2Mul.value} = ${mul}`;

//   console.log(mul);
});
