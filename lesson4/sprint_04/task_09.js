// itgid.info - курс Node.js


// Task 09
// Создайте анонимный модуль в данном файле, который принимает аргумент - arr. 
// Модуль должен записать строку в файл t_09.txt массив arr. Файл размещен в d_04. 
// Причем каждый вложенный массив должен идти с новой строки. 
// Разделитель элементов вложенных массивов - пробел. 
// Перенос строки осуществлять через \r\n. Кодировка utf8, ключ w.


const fs = require('fs');

module.exports = function (arr) {
    if (arr) {
        let pathToFile = './d_04/t_09.txt';
        let text = arr.map(i => i.join(' ')).join('\r\n');
        fs.writeFileSync(pathToFile, text, { encoding: 'utf8', flag: 'w' });
        return fs.existsSync(pathToFile);
    }
    return false;
}