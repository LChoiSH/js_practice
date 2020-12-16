const arr = [1, [2, 3], [4, 5, 6], ['dsa', 'rht'], 'javascript'];

const result = arr.reduce((acc, el) => {
  return acc.concat(el);
}, []);

console.log(result);