// itgid.info - курс Node.js


// Task 08
// Создайте анонимный модуль в данном файле, который принимает аргумент - массив строк и записывает их в файл t_08.txt в папке d_04. 
// Каждый элемент - с новой строки. Перенос строки осуществлять через \r\n. Кодировка utf8, ключ w.


const fs = require('fs');

module.exports = function (arr) {
    if (arr) {
        let pathToFile = './d_04/t_08.txt';
        let text = arr.join('\r\n');
        fs.writeFileSync(pathToFile, text, { encoding: 'utf8', flag: 'w' });
        return fs.existsSync(pathToFile);
    }
    return false;
}