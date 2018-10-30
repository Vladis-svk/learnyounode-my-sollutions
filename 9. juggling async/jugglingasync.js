var http = require("http"),
    data = [],
    counter = 0;

function make_request(index) {
  http.get(process.argv[2+index], (res) => {
    var temp_data = "";

    res.setEncoding("utf-8");
    res.on("data", (chunk) => temp_data += chunk);
    res.on("end", () => {
      data[1+index] = temp_data.toString();
      counter++;
      if (counter === 3) {
        console.log(data[1]);
        console.log(data[2]);
        console.log(data[3]);
      };
    });
    res.on("error", (e) => console.error(e));
  });
};

for (var i = 0; i < 3; i++) {
  make_request(i);
};
