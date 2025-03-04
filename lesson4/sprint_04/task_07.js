// itgid.info - курс Node.js


// Task 07
// Создайте анонимный модуль в данном файле, который принимает аргумент - строку. 
// Модуль должен записать строку в файл t_07.dat в папке d_04, причем после каждого символа строки должен быть пробел!!! 
// Кодировка utf8. Флаг файловой системы - w. 

// например строка 'abba' в файле должен быть текст
//a b b a 
// не забываем пробел после последней строки!!!

const fs = require('fs');

module.exports = function (s) {
    if (s) {
        pathToFile = './d_04/t_07.dat';
        let array = s.split('');
        s = array.join(' ') + ' ';
        fs.writeFileSync(pathToFile, s, { encoding: 'utf8', flag: 'w' })
        return fs.existsSync(pathToFile);
    }
    return false;
}