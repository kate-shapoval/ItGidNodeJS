const fs = require("fs");
const { parse } = require("csv-parse");

//https://csv.js.org/parse/options/

// руками
// const data = fs.readFileSync('./d_06/company.csv', {encoding : 'utf8'});
// console.log(data);
// let dataArr = [];
// data.split('\r\n').forEach(line => dataArr.push(line.split(',')));
// console.log(dataArr);

const result = [];

async function getCSV () {
    const parsingData = fs
        .createReadStream('./d_06/company.csv')
        .pipe(parse(
            {
                delimiter: ',',
                columns : true,
                // group_columns_by_name : true
                // encoding : 'utf8',
                // from_line : 2,
                ignore_last_delimiters : true
            }
        ));
        for await (const row of parsingData) {
            result.push(row);
        }
    return result;
}

async function init(){
    const records = await getCSV();
    console.info(records);
}

init();
                    