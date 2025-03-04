// connect the module for working with the file system
const fs = require('fs');
const path = require('path');

// Checking the existence of a folder is a synchronous operation
function f01 () {
  const pathToDir = './test';

  if (fs.existsSync(pathToDir)) {
    console.log('yes')
  } else {
    console.log('no')
  }
}

// f01();

// Checking the existence of a file is a synchronous operation

function f02 () {
  const pathToFile  = './test/info1.dat';

  if (fs.existsSync(pathToFile)) {
    console.log('yes')
  } else {
    console.log('no')
  }
}

// f02();

// file size
function f03 () {
  const pathToFile  = './test/info.dat';
  const fileInfo = fs.statSync(pathToFile);
  console.log(fileInfo.size);
}

// f03();

// get file name and extension

function f04 () {
  const pathToFile  = './test/info.dat';
  console.log(path.basename(pathToFile));
  console.log(path.dirname(pathToFile));
  console.log(path.extname(pathToFile));
  console.log(path.parse(pathToFile));
}

// f04();

// Get all files in a folder
function f05 () {
  const pathToFolder  = './test';
  const allFiles = fs.readdirSync(pathToFolder);
  console.log(allFiles);
  // let's conclude them
  let out = '';
  allFiles.forEach(item => {
    out += item + '\n';
  })
  console.log(out);
}

// f05();
// the absolute path to the current directory
// console.log(__dirname);
const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath);
