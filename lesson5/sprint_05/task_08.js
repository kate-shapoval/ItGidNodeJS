// itgid.info - курс NODE.JS 2024


// Task 08
// Создайте анонимный модуль в данном файле, который при запуске делает читает файл ./f_05/01.json 
// и записывает из него данные в файл ./f_05/08.json без ключа "os".

const fs = require('fs');

module.exports = function () {
    const pathToFile = './f_05/01.json';
    const pathToNewFile = './f_05/08.json';
    if (fs.existsSync(pathToFile)) {
        const data = JSON.parse(fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'r' }));
        delete data.os;
        console.log(data);
        fs.writeFileSync(pathToNewFile, JSON.stringify(data), { encoding: 'utf8', flag: 'w' });
        return fs.existsSync(pathToNewFile);
    }
    return false;
}

