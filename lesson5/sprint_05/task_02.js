// itgid.info - курс NODE.JS 2024


// Task 02
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, 
// читает указанный файл и возвращает true, если значение age из полученного объекта больше 18 лет (строго) 
// и false в противном случае.

const fs = require('fs');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' }));
        return (data.age > 18) ? true : false;
    }
    return false;
}

