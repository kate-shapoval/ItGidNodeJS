// itgid.info - курс NODE.JS 2024


// Task 03
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, 
// читает указанный файл и возвращает массив состоящий из имен (name) сотрудников.

const fs = require('fs');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' }));
        return data.employees.map(i => i.name);
    }
    return false;
}

