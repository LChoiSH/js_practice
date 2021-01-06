const str = 'To lose your path is the way to find that path';

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g;
const regex4 = /t/ig;

console.log(regex1, str.search(regex1));
console.log(regex2, str.search(regex2));
console.log(regex3, str.search(regex3));
console.log(regex4, str.search(regex4));