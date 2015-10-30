"use strict";

var expect = require('chai').expect;
var fs = require('fs');
var convertBMP = require('./convert-bmp.js');


describe('bmp transformer', function() {

  var newContent;
  var origFilename = './images/crayons.bmp';
  var content = fs.readFileSync(origFilename);

  var origContent = new Buffer(content.length);

  content.copy(origContent);

  newContent = convertBMP(content);

  // Offset to image -- stored in byte 10
  //based on https://en.wikipedia.org/wiki/BMP_file_format
  var offset = content[10];

  it('process BMP doesnt change header', function(done) {

    for (var i = 0; i < offset; i++) {
      expect(origContent[i]).to.equal(newContent[i]);
    }

    done();

  });

  it('transform change image to invert colors (ie, 0xFF - orig pixel)', function(done) {

    for (var i = offset; i < content.length; i++) {
      expect(newContent[i]).to.equal(0xFF - origContent[i]);
    }

    done();

  });

  it('new Buffer is same length as orig Buffer', function(done) {

    expect(newContent.length).to.equal(origContent.length);

    done();

  });
});
