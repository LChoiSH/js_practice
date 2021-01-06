const str = "the quick brown fox jumps over the lazy dogs";

for(let item of str) {
  console.log(item);
  item = 'c';
}
console.log(str);

const it = str[Symbol.iterator]();

console.log(it);
console.log(it.next());