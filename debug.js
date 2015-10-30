var DEBUG_MODE = true;

function debug(msg) {
  if (DEBUG_MODE === true) {
      console.log("DEBUG:", msg);
  }
}

module.exports = debug;
