
var debug = require('./debug');

function transformInvertColors(buff) {
  var offset = buff.readUIntLE(10, 4);
  debug("offset = ", offset);

  for (var i = offset; i < buff.length; i++) {
    buff[i] = 0xFF - buff[i];
  }

}

function processBMP(buff) {

  var newBuff = new Buffer(buff.length);

  buff.copy(newBuff);

  console.log("newBuff = " + newBuff.toString('hex', 38, 45));

  transformInvertColors(newBuff);

  console.log("newBuff = " + newBuff.toString('hex', 38, 45));

  return newBuff;
}

module.exports = processBMP;
