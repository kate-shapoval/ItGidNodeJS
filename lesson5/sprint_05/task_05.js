// itgid.info - курс NODE.JS 2024


// Task 05
// Создайте анонимный модуль в данном файле, который принимает аргумент - путь к файлу JSON, 
// и возвращает сумму его элементов.

const fs = require('fs');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        const data = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' }));
        return data.reduce((accumulator, i) => accumulator + i, 0);
    }
    return false;
}

