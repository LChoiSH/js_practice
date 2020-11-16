var x = 5; // type Number
var y = 'five' // type String
var isTrue = true // type Boolean
var empty = null; // type null
var nothing // type undefined
var sym = Symbol('me'); // type Symbol
console.log(sym);

var item = {
  price: 5000,
  count: 10
}; // type Object

var fruits = ['apple', 'orange', 'kiwi']; // type array
var addFruit = function (fruit){
  fruits.push(fruit);
}; // type function

addFruit('watermelon');
console.log(fruits);