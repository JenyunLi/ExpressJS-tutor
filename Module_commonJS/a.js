function test() {
  console.log('test-aaa');
}

function _init() {
  console.log('init');
}

function upper(str) {
  return str[0].toUpperCase()+str.substr(1)
}

module.exports = {test, upper}
// exports.test= test
// exports.upper= upper
