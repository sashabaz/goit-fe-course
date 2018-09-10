'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  const min = 4;
  const max = 16;
  const isLogin = login.length >= min && login.length <= max;
  return isLogin;
};

const isLoginUnique = function(allLogins, login) {
  const isUnique = !allLogins.includes(login);
  return isUnique;
};

const addLogin = function(login) {
  const isLogin = isLoginValid(login);
  const loginIsUnique = isLoginUnique(logins, login);
  if (!isLogin) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return;
  }

  if (!loginIsUnique) {
    console.log(`Такой логин уже используется!`);
    return;
  }
  logins.push(login);
  console.log(`Логин успешно добавлен!`);
};

addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
