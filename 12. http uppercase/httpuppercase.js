var http = require("http"),
    Trans = require(__dirname + "/tranformstream.js");
    trans = new Trans();
    server = http.createServer((req, resp) => {
      if (req.method !== "POST") {
        res.writeHead(404, {"Content-Type" : "text/plain"});
        res.end("Accepting only post request" + "\n" + "Try again. :)")
      }
      req.pipe(trans).pipe(resp);
    })
    .listen(process.argv[2]);
