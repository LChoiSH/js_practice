const str1 = 'javascript 200';
const str2 = new String('javascript 200');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 === 'javascript 200');
console.log(str2 === new String('javascript 200'));

console.log(str1.valueOf());
console.log(str2.valueOf());