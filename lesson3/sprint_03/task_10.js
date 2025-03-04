// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает объект вида название файла - размер.

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {
    if (folderName && fs.existsSync(folderName)) {
        let allFiles = fs.readdirSync(folderName);
        let obj = {};
        allFiles.forEach((i) => {
            let pathToFile = path.join(folderName, i);
            obj[i] = fs.statSync(pathToFile).size;
        });
        return obj;
    }
    return false;
}

