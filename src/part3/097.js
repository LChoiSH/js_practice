const arr = [
  {name: "a", age: 43543},
  {name: "b", age: 22},
  {name: "c", age: 333},
  {name: "d", age: 4444},
  {name: "e", age: 55555},
  {name: "f", age: 666666},
]

// const finding = arr.find(temp => temp.age === 224);
//
// arr.forEach(n => {
//   n.name = "?";
// })
//
// console.log(finding);

const arr2 = arr.map(item => {
  item.age += 1;
  return {name: 'good', age: 123};
});

console.log(arr);
console.log(arr2);