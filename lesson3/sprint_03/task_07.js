// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя файла и возвращает его расширение. Допускается наличие точки перед расширением.

const path = require('path');
const fs = require('fs');

module.exports = function (fileName) {
    if (fileName) {
        if (fs.existsSync(fileName)) {
            return path.parse(fileName).ext;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

