var filesys = require("fs");

filesys.readFile(process.argv[2], "utf-8", (err, data) => {
      if (err) return console.error("err");
      data = data.toString().split("\n");
      console.log(data.length-1);
});
