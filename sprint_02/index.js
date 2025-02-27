// тут вы подключаете и тестируете модули. Для удобства можно комментировать вызовы и подключения.

// Task 01
const task_01 = require('./task_01');
console.log("Task 1");
console.log(task_01); // ожидаем NodeJS

// Task 02
const task_02 = require('./task_02');
console.log("Task 2");
console.log(task_02(3, 6));

// Task 03
const task_03 = require('./task_03')
console.log("Task 3");
console.log(task_03([33, 2, -2, 35, 3]));

// Task 04
const task_04 = require('./task_04')
console.log("Task 4");
console.log(task_04(' I was born in 1518 in the vilLage of Glenfinnan on the shores '));

// Task 05
const task_05 = require('./task_05')
console.log("Task 5");
console.log(task_05('rtpd')); // ожидаем или r или t или p или d

// Task 06
const { preparedArray } = require('./task_06');
console.log("Task 6");
// ожидаю ['aa', 'b', 'c', 'dd]
console.log(preparedArray([' aA ', 'b', 'C', 'DD ']));

// Task 07
const { isWhitespace } = require('./task_07');
console.log("Task 7");
console.log(isWhitespace(' HummaKavula ')); // ожидаю true

// Task 08
const task_08 = require('./task_08');
console.log("Task 8");
console.log(task_08(['3', 4, '5d', 6])); // ожидаю [3, 4, 6]

// Task 09
const task_09 = require('./task_09')
console.log("Task 9");
console.log(task_09('png'));

// Task 10
const { password } = require('./task_10');
console.log("Task 10");
console.log(password('dfghjkert'));

// Task 11
const task_11 = require('./task_11');
console.log("Task 11");
console.log(task_11(33));

// Task 12
const fileSize = require('./task_12');
console.log("Task 12");
console.log(fileSize(2233));

// Task 13
const task_13 = require('./task_13');
console.log("Task 13");
console.log(task_13(['t', 'b'], ['t', 'b']));

// Task 14
const task_14 = require('./task_14');
console.log("Task 14");
console.log(task_14({ 'a': 2 }, { 'a': 2 }));

// Task 15
const { eqObject, eqArray } = require('./task_15');
console.log("Task 15");
console.log(eqObject({ 'a': 2 }, { 'a': 2 }));
console.log(eqObject(['t', 'b'], ['t', 'b']));
console.log(eqArray(['t', 'b'], ['t', 'b']));
