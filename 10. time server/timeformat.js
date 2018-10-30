function get_datetime() {
  var time_and_date = new Date(),
      datetime = {
      "year" : time_and_date.getFullYear(),
      "month" : time_and_date.getMonth() + 1,
      "day" : time_and_date.getDate(),
      "hour" : time_and_date.getHours(),
      "minute" : time_and_date.getMinutes()
    }

  for (var i in datetime) if (datetime[i] < 10) datetime[i] = "0" + datetime[i];

  return "" + datetime.year +
        "-" + datetime.month +
        "-" + datetime.day +
        " " + datetime.hour +
        ":" + datetime.minute;
}

module.exports = get_datetime;
