export function getRandomNumber(num) {
  const resault = Math.trunc(Math.random() * num) + 1;
  return resault;
}
export function getRandomNumberArray(num, res) {
  const resault = [];

  while (true) {
    let randomNum = getRandomNumber(99);
    while (randomNum === res) {
      randomNum = getRandomNumber(99);
    }
    resault.push(randomNum);
    if (resault.length === num) break;
  }
  return resault;
}

export function readyRandimNumbers(arr, res) {
  const randomIndex = getRandomNumber(arr.length - 1);
  arr[randomIndex] = res;
  return arr;
}
// export function readyRandom

export function calc(expression) {
  let resault = null;
  eval(`resault = ${expression}`);
  return resault;
}
