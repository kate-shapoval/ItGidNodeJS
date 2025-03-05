// itgid.info - курс NODE.JS 2024


// Task 06
// Создайте анонимный модуль в данном файле, который возвращает количество JSON файлов в папке f_05. 
// Обращаю внимание - в папке могут находиться файлы другого формата и другие папки - их учитывать не нужно!!!

const fs = require('fs');
const path = require('path');

module.exports = function () {
    const pathToDir = './f_05';
    let count = 0;
    if (fs.existsSync(pathToDir)) {
        const allFiles = fs.readdirSync(pathToDir);
        allFiles.forEach((i => {
            let pathToFile = path.join(pathToDir, i);
            if (path.parse(pathToFile).ext === '.json') {
                count++;
            }
        }));
        return count;
    }
    return false;
}

