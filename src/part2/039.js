var a = 10;
console.log(a);

function print() {
  var b = 20;
  if(true) {
    var c = 30;
  }

  console.log(c);
}

try {
  print();
  console.log(b);
} catch(e) {
  // console.log(e)
}

var global = 'global';

function printg() {
  console.log(global);
}

function printg2() {
  global = 'local';
  printg();
}

printg();
printg();