'use strict';
let userInput;
let total = 0;
const numbers = [];
do {
  userInput = prompt('Введите число.');
  if (userInput !== null && !isNaN(userInput)) {
    numbers.push(userInput);
  }
  if (isNaN(userInput)) {
    alert('Было введено не число, попробуйте еще раз.');
  }
} while (userInput !== null);

if (numbers.length == 0) {
  alert('Пуст');
} else {
  for (const i of numbers) {
    total += Number(i);
  }
  alert(`Общая сумма чисел равна ${total}.`);
}

