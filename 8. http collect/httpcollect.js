var http = require("http"),
    data = "";

http.get(process.argv[2], (res) => {
  res.setEncoding("utf-8");
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
  res.on("error", (e) => console.error(e));
});
