// itgid.info - курс NODE.JS 2024


// Task 04
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла JSON, 
// читает указанный файл и возвращает сумму значений ключа AMOUNT.

const fs = require('fs');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' }));
        return data.EXPENSE.reduce((accumulator, i) => accumulator + i.AMOUNT, 0);
    }
    return false;
}

