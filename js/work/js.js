let guest;
const name = 'Mango';
guest = name;
console.log(guest);

// 2

const day = 02;
const month = 10;
const year = 2017;

const date = day + '\\' + month + '\\' + year;

console.log(date); // 02\10\2017

const nameUser = prompt('имя пользователя');
let nameAlert = alert(nameUser);
console.log(nameAlert);

// 3

const name = 'Mango';
const date = '14/08/2031';
const roomType = 'люкс';

const message = `${name} прибывает на отдых ${date} в ${roomType}`;
console.log(message);
// Mango прибывает на отдых 14/08/2031 в люкс.

// 4

const padding = '20px';
const border = '5px';
const contentWidth = '100px';

const totalWidth = `${Number.parseInt(padding) +
  Number.parseInt(border) +
  Number.parseInt(contentWidth)}px`;

console.log(totalWidth); // '125px'
