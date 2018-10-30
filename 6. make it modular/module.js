var filesys = require("fs"),
    path = require("path");

function direct_modules(filepath, file_extension, callback) {
    var f_files = [];

    filesys.readdir(filepath, (err, files) => {
      if (err) return callback(err);
      files.forEach((arg) => {
        if (path.extname(arg) === "."+file_extension) f_files.push(arg);
      });
      callback(null, f_files);
    });
};
module.exports = direct_modules;
