var http = require("http"),
    unix_or_iso_time = require(__dirname + "/timejson.js"),
    {URL, URLSearchParams} = require("url"),
    server = http.createServer((req, resp) => {
      var url_adress = new URL ("http://localhost:"+ req.url),
          time_part = url_adress.searchParams.get("iso");

      switch (url_adress.pathname) {
        case "/api/unixtime": unix_or_iso_time(req, resp, time_part, "unix");
                              break;
        case "/api/parsetime": unix_or_iso_time(req, resp, time_part, "iso");
                               break;
        default: resp.writeHead(404, {"Content-Type":"text/plain"});
                 resp.end("Nothing to see here :)");
                 break;
      };
    })
    .listen(process.argv[2])
    .on("error", (e) => console.error(e) );
