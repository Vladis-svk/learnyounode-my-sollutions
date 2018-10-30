function unix_iso_time(req, resp, qstring, type) {
  var time = new Date(qstring),
      what_time = (type === "unix") ? {"unixtime": time.getTime()} : {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
      };
  resp.writeHead(200, {"Content-Type":"application/json"});
  resp.end(JSON.stringify(what_time));
};

module.exports = unix_iso_time;
