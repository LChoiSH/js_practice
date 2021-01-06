const arr  = ['one', 'two', 'three', 'two', 'one', 'four'];

const test = new Set(arr);

console.log(test);

const keys = test.keys();
const values = test.values();
const entries = test.entries();




for(let key of keys) {
  console.log(key);
}