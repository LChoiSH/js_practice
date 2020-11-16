function sum() {
  var total = 0;
  for (var i=0;i < arguments.length;i++) {
    total += arguments[i];
  }

  console.log(arguments instanceof Array);
  return total;
}

var sumOf1to3 = sum(1,2,3);

console.log(sumOf1to3);

function testArg() {
  // copy arguments to array
  var newArr = Array.prototype.slice.call(arguments);
  console.log(newArr);
  console.log(newArr.indexOf('b'));

  // arguments is not array
  // console.log(arguments.indexOf('b'));
}

testArg('a', 'b');