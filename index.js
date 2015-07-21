var miel = require('miel');

module.exports = function(source){
  this.cacheable();
  var output = miel(source);
  return output;
};
