// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает true, false в зависимости от того существует или нет указанная папка. 
// Пример вызова указан в index.js. Формат запуска указан в index.js.

const fs = require('fs');

module.exports = function (dirName) {
    if (dirName) {
        if (fs.existsSync(dirName)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

