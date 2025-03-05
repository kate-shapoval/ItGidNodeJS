const fs = require("fs");
const {stringify} = require("csv-stringify");

const filename = './d_06/info.csv';
const writableStream = fs.createWriteStream(filename);

const data = [
    {
        "id" : 1,
        "name" : "Dou"
    },
    {
        "id" : 2,
        "name" : "Marta"
    }
];

const columns = [
    "id", "name"
  ];

const stringifier = stringify({ header: true, columns: columns, delimiter : ',' });

data.forEach(item =>   stringifier.write(item));
stringifier.pipe(writableStream);
console.log("Finished writing data");
