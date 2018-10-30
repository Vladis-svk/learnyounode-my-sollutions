var http = require("http");

http.get(process.argv[2], (res) => {
  res.setEncoding("utf-8");
  res.on("data", (chunk) => console.log(chunk));
  res.on("error", (e) => console.error(e));
}).on("error", (e) => console.error(e));
