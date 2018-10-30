var filesys = require("fs"),
    path = require("path");
    
filesys.readdir(process.argv[2], (err, files) => {
  if (err) return console.error(err);
  files.forEach( (arg) => {
    if (path.extname(arg) === "."+process.argv[3]) console.log(arg)
  });
});
