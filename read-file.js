var fs = require('fs');

function readBMPFile(filename) {
  fs.readFile(filename, function(err, data) {
    if (err) throw err;
    console.log(data);

    return data;

  });
}

module.exports = readBMPFile;
