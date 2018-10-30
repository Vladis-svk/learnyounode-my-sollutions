var datetime = require(__dirname + "/timeformat.js"),
    net = require("net");
    server = net.createServer((socket) => {
      socket.end(datetime() + "\n");
    })
    .on("error", (e) => console.error(e))
    .listen(process.argv[2]);
