// files
const fs = require("fs");

// crud files
//reading file

//let filecontent = fs.readFileSync("f1.txt");
// this will print output in buffer format
//console.log("data of file 1 ->", filecontent);

// by adding string concatenation it will not read in buffer format
//console.log("data of f1 -> " + filecontent);

// writing a file
// by this content will be overriden
// will create the file if not exist
//fs.writeFileSync('f2.txt','This is file 2 added version')
//console.log('File has been written')

// this method adds new data to a previously written file
// fs.appendFileSync("f3.txt", " THis is updated data added to f3");
// console.log("file has been appended");

// delete a file
// fs.unlinkSync("f2.txt");
// console.log("file has been deleted");

// DIrectories
// CRUD DIRECTORIES

// creating directory
//fs.mkdirSync("myDirectory");

// check content inside of a directory
let folderpath = "C:\\Users\\Admin\\Desktop\\nodescaler\\myDirectory";

let foldercontent = fs.readdirSync(folderpath);
console.log("Folder Content " + foldercontent);
// actual output is in array format
console.log("Folder Content ", foldercontent);

// to check dir exist or not
let doesExist = fs.existsSync("test.js");
console.log(doesExist);

// remove directory
fs.rmdirSync("myDirectory");
console.log("Directory has been deleted");
