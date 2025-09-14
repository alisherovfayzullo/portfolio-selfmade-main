import { mathSigns } from "./math-constants.js";
import {
  calc,
  getRandomNumber,
  getRandomNumberArray,
  readyRandimNumbers,
} from "./math-functions.js";

function init() {
  let a = getRandomNumber(9);
  let b = getRandomNumber(9);
  const singsIndex = getRandomNumber(mathSigns.length - 1);
  const sing = mathSigns[singsIndex];

  if (sing === "/") {
    while (a < b || a % b !== 0) {
      a = getRandomNumber(9);
      b = getRandomNumber(9);
    }
  }
  const resault = calc(`${a}${sing}${b}`);
  const array = getRandomNumberArray(16, resault);
  const readyArray = readyRandimNumbers(array, resault);
  console.log(`${a} ${sing} ${b}`);
  // console.log(`${a} ${sing} ${b} = ${resault}`);
  // console.log(readyArray);

  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  readyArray.forEach((num) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = num;
    grid.appendChild(card);
    card.addEventListener("click", () => {
      if (num === resault) {
        console.log("Togri javob:", num);
        card.innerText = "✔";
        card.style.backgroundColor = "green";
        setTimeout(() => {
          init();
        }, 1000);
      } else {
        card.innerText = "✖";
        console.log("Notog'ri javob:", num);
        card.style.backgroundColor = "red";
        setTimeout(() => {
          init();
        }, 1000);
      }
    });
  });
}

init();

setInterval(init, 10000);
