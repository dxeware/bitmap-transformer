var fs = require('fs');
var convertBMP = require('./convert-bmp.js');

var origFilename = './images/crayons.bmp';
var newFilename = origFilename.replace(/.bmp$/g, ".invert.bmp");

//Read file
fs.readFile(origFilename, function(err, data) {

  if (err) throw err;

  // Write new inverted bmp file
  // -- processBMP returns new content buffer
  fs.writeFile(newFilename, convertBMP(data), function(err) {
    if (err) throw err;
  });
});

