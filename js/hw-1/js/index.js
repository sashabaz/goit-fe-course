'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const login = prompt('Введите логин');
let password;
const cancelUser = 'Отменено пользователем';
const messagesPassword = 'Введите пароль';
const messagesError = 'Доступ запрещен!';
const messagesWelcom = 'Добро пожаловать!';

if (login === null) {
  alert(cancelUser);
} else if (login === adminLogin) {
  password = prompt(messagesPassword);
} else if (login !== adminLogin) {
  alert(messagesError);
}
if (password === null) {
  alert(cancelUser);
} else if (password === adminPassword) {
  alert(messagesWelcom);
}
if (password !== adminPassword && password !== undefined && password !== null) {
  alert(messagesError);
}
