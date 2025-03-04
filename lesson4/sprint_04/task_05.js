// itgid.info - курс Node.js


// Task 05
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. 
// Читает файл в переменную. Текст содержит множество двойных пробелов. Замените их все на одинарные и возвратите строку. 
// Для упрощения задачи считаем что в тексте могут быть только одинарные и двойные пробелы. 

const fs = require('fs');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
        return data.replaceAll('  ', ' ');
    }
    return false;
}

