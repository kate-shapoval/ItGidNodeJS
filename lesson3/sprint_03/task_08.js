// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает количество файлов в ней. 
// Для простоты считаем что в папке могут лежать только файлы (других папок нет).

const fs = require('fs');

module.exports = function (folderName) {
    if (folderName) {
        if (fs.existsSync(folderName)) {
            return fs.readdirSync(folderName).length;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

