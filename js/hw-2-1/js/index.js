'use strict';
let userInput;
let total = 0;
const numbers = [];
do {
  userInput = prompt('Введите число');
  numbers.push(userInput);
} while (userInput !== null);

if (numbers.length > 0) {
  for (const i of numbers) {
    total += Number(i);
  }
  alert(`Общая сумма чисел равна ${total}`);
}
