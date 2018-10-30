var stream = require("stream"),
    Transform = stream.Transform,
    util = require("util");

function transformator(options) {
  if (!(this instanceof transformator))
    return new transformator(options);
  Transform.call(this, options);
}

util.inherits(transformator, Transform);

transformator.prototype._transform = function (chunk, enc, callback) {
  var data = chunk.toString().toUpperCase();
  this.push(data);
  callback();
};

module.exports = transformator;
