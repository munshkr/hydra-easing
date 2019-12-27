const easingFunctions = require("./easing");

module.exports = {
  easing: easingFunctions
};

for (let key in easingFunctions) {
  module.exports[key] = function(duration, mapFn) {
    return function({ time }) {
      let t = (time / duration) % 1;
      let easeFunc = easingFunctions[key];
      return mapFn ? mapFn(easeFunc(t)) : easeFunc(t);
    };
  };
}
