'use strict';
let userInput;
let total = 0;
const numbers = [];

do {
  userInput = prompt('Введите число');
  numbers.push(userInput);
} while (userInput !== null);
numbers.pop();
for (const i of numbers) {
  total += Number(i);
}
if (numbers.length > 0) {
  alert(`Общая сумма чисел равна ${total}`);
} else {
  alert('Массив  пустой');
}
