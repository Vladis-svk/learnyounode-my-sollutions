var filesys = require("fs"),
    file = filesys.readFileSync(process.argv[2], "UTF-8").toString().split("\n");

console.log(file.length-1);
