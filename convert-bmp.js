"use strict";

var debug = require('./debug');

function transformInvertColors(buff, imgOffset) {

  for (var i = imgOffset; i < buff.length; i++) {
    buff[i] = 0xFF - buff[i];
  }

}

function convertBMP(buff) {

  //Get the bmp image offset from header
  var imgOffset = buff.readUIntLE(10, 4);
  debug("image offset = " + imgOffset);

  // Transform image by inverting colors
  transformInvertColors(buff, imgOffset);

  debug("buff = " + buff.toString('hex', 38, 45));

  return buff;
}

module.exports = convertBMP;
