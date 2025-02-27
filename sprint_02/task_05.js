// itgid.info - курс Node.js

// Создайте анонимный модуль который принимает строку и возвращает случайный
// символ из данной строки. Весь код реализуйте внутри функции модуля.
function randomInt(min = 0, max = 100) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
module.exports = function (str) {
    if (str) {
        return str[randomInt(0, str.length - 1)];
    }
}


