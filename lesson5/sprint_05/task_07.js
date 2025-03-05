// itgid.info - курс NODE.JS 2024


// Task 07
// Создайте анонимный модуль в данном файле, который при запуске делает копию файла 01.json в папке f_05 под именем 07.json.
// Внимание!!! Во всех задачах где создаются файлы json, подразумевается utf8, флаг - w. 

const fs = require('fs');

module.exports = function () {
    const pathToFile = './f_05/01.json';
    const pathToNewFile = './f_05/07.json';
    if (fs.existsSync(pathToFile)) {
        const data = fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'r' });
        fs.writeFileSync(pathToNewFile, data, { encoding: 'utf8', flag: 'w' });
        return fs.existsSync(pathToNewFile);
    }
    return false;
}

