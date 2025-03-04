// itgid.info - курс Node.js


// Task 04
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. 
// Файл содержит строку код. Пусть модуль возвращает true, если в коде есть число 7 и false в остальных случаях. 
// Пример вызова в index.js

const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        date = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
        return (date.indexOf('7') !== -1) ? true : false;
    }
    return false;
}

