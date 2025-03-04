// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который принимает имя папки и возвращает объект вида название файла - размер.

const path = require('path');
const fs = require('fs');

module.exports = function (folderName) {
    if (folderName) {
        if (fs.existsSync(folderName)) {
            let allFiles = fs.readdirSync(folderName);
            let obj = {};
            allFiles.forEach((i) => {
                let filePath = folderName + '/' + String(path.basename(i));
                obj[path.parse(i).name] = fs.statSync(filePath).size;
            });
            return obj;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

