// itgid.info - курс Node.js

// Создайте модуль password который принимает строку и проверяет, что ее длина 
// больше 8 символов и символы, которые применяются в строке - уникальные в рамках 
// строки. Возвращает true если все условия выполняются и false, если нет. 
// Модуль должен предварительно удалить пробелы по краям строки.

module.exports.password = function (str) {
    if (str && str.length > 8) {
        str = str.trim();
        for (let i = 0; i < str.length; i++) {
            let uniqItem = true;
            for (let j = 0; j < str.length; j++) {
                if (str[i] === str[j] && uniqItem !== 'first') {
                    uniqItem = 'first';
                    continue;
                }
                if (str[i] === str[j] && uniqItem === 'first') return false;
            }
        }
        return true;
    } else {
        //console.log("Enter string more than 8 symbols");
        return false;
    }

}