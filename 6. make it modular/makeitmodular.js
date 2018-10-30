var file_mod = require(__dirname + "/module.js");

file_mod(process.argv[2], process.argv[3], function (err, data) {
  if (err) return console.error(err);
  data.forEach((arg) => console.log(arg));
});
