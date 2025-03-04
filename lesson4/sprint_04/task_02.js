// itgid.info - курс Node.js


// Task 02
// Создайте анонимный модуль в данном файле, который принимает аргумент - имя файла. 
// Возвращает сумму чисел из файла. 
// Пример вызова в index.js. Для простоты считаем что в файле будут только числа.

const fs = require('fs');

module.exports = function (fileName) {
    if (fileName && fs.existsSync(fileName)) {
        let data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
        let dataArray = data.split('\r\n').filter(i => i.trim() !== '');
        return dataArray.reduce((accumulator, i) => accumulator + parseInt(i), 0);
    }
    return false;
}

