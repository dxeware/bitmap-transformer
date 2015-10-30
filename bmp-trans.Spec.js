var expect = require('chai').expect;
var fs = require('fs');
var convertBMP = require('./convert-bmp.js');



describe('bmp transformer', function() {
  var content = fs.readFileSync('./images/crayons.bmp');
  var newContent = convertBMP(content);

  // Offset to image -- stored in byte 10
  //based on https://en.wikipedia.org/wiki/BMP_file_format
  var offset = content[10];

  it('process BMP doesnt change header', function(done) {

    for (var i = 0; i < offset; i++) {
      expect(content[i]).to.equal(newContent[i]);
    }

    done();

  });

  it('transform change image to invert colors (ie, 0xFF - orig pixel)', function(done) {

    for (var i = offset; i < content.length; i++) {
      expect(newContent[i]).to.equal(0xFF - content[i]);
    }

    done();

  });

  it('new Buffer is same length as orig Buffer', function(done) {

      expect(newContent.length).to.equal(content.length);

    done();

  });
});
