var obj = {a: 1, b: 2, c: 30, d: 44, e: 5};

var {a, c} = obj;
console.log(a, c);

var {a:newA=10, f:newF=2222} = obj;
console.log(obj);
console.log(newA, newF);

var arr = [1,2,3,4,5]
var [b,c, ...rest] = arr;
console.log(b,c,rest);

var [a=11, f=22] = [1];
console.log(a,f);

[a, f] = [f, a];
console.log(a, f);