"use strict";

var fs = require('fs');
var convertBMP = require('./convert-bmp.js');

var origFilename, newFilename;

// Read in bmp file name from cmd line
origFilename = process.argv[2];
if (origFilename === undefined) {

  console.log("\nA bmp file is required! Please provide one as a cmd line argument\n");

} else {

  //Create new inverted bmp filename
  newFilename = origFilename.replace(/.bmp$/g, ".invert.bmp");

  //Read file
  fs.readFile(origFilename, function(err, data) {

    if (err) {
      throw err;
    }

    // Write new inverted bmp file
    // -- processBMP returns new content buffer
    fs.writeFile(newFilename, convertBMP(data), function(err) {
      if (err) {
        throw err;
      }
    });
  });
}

