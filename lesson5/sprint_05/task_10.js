// itgid.info - курс NODE.JS 2024


// Task 10
// Создайте анонимный модуль в данном файле, который получает массив, выбирает из него числа и записывает эти числа в виде массива в JSON файл:
// ./f_05/10.json.

const fs = require('fs');

module.exports = function (arr) {
    const pathToFile = './f_05/10.json';
    if (arr) {
        arr = arr.filter(i => typeof i === 'number');
        fs.writeFileSync(pathToFile, JSON.stringify(arr), { encoding: 'utf8', flag: 'w' });
        return fs.existsSync(pathToFile);
    }
    return false;
}

