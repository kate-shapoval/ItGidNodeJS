const fs = require('fs');
const path = require('path');

// write file

const text = 'Азимут підвівся, виплюнув два зуби і прохрипів: \r\n— Пронесло! Це була якась приблудна комета…\r\nТільки-но я роззявив рота, щоб відповісти йому, коли знову — торох-торорох!\r\n';

fs.writeFileSync('./d02/nebreha.txt', text, { encoding: 'utf8', flag: 'a' });

// write file from array

const text2 = [
    '— Де ми? — якомога спокійніше запитав його я.',
    '— На Землі! — ляскаючи зубами, відповів він.',
    '— Але тут коїться кінець світу! Мертві встають з-під землі!'
];

fs.writeFileSync('./d02/nebreha2.txt', text2.join('\r\n'), { encoding: 'utf8', flag: 'w' });

