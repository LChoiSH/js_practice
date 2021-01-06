// map

const testMap = new Map();

testMap.set('one', 1);
testMap.set('two', 2);
testMap.set('three', 3);

console.log(testMap.get('one'));
console.log(testMap.has('two'));
// testMap.delete('one');

console.log(testMap.has('one'));
console.log(testMap.has('two'));

testMap.set(44, 'can?');
console.log(testMap.get(44));

const keys = testMap.keys();
const values = testMap.values();
const entries = testMap.entries();

console.log(keys.next().value);
values.next();
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);


