const str = "Java is not in Javascript";

const result1 = /java/ig.exec(str);
console.log(result1);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);
