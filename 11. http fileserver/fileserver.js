var http = require("http"),
    fs = require("fs"),
    server = http.createServer((req, res) => {
      res.writeHead(200, {"Content-Type": "text/plain"});
      fs.createReadStream(process.argv[3]).pipe(res);
    })
    .listen(process.argv[2]);
