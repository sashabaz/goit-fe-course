'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const login = prompt('Введите логин');
const cancelUser = 'Отменено пользователем';
const messagesPassword = 'Введите пароль';
const messagesError = 'Доступ запрещен!';
const messagesWelcom = 'Добро пожаловать!';

let password;

if (login === null) {
  alert(cancelUser);
} else if (login === adminLogin) {
  password = prompt(messagesPassword);
}
if (password === null) {
  alert(cancelUser);
} else if (password === adminPassword) {
  alert(messagesWelcom);
} else {
  alert(messagesError);
}
