// itgid.info - курс Node.js

// Создайте анонимный модуль, который принимает строку и возвращает строку 'image', 
// если исходная строка равна или 'gif', или 'png', или 'jpeg', или 'jpeg'.
//  И false в противном случае. 

module.exports = function (s) {
    if (s) {
        return (s.indexOf('gif') !== -1 || s.indexOf('png') !== -1 || s.indexOf('jpeg') !== -1) ? 'image' : false
    }
}
