const fs = require('fs');

// read json file

const data = fs.readFileSync('./d_05/j_01.json', {encoding: "utf-8"});
// console.log(typeof data);
let dataObj = JSON.parse(data);
console.log(dataObj);
