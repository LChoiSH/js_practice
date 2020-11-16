function checkNumber(val) {
  if(typeof val !== 'number') throw 'This is not number';
  console.log('This type is num');
}

try {
  checkNumber(100);
  checkNumber('wrong');
} catch(e) {
  console.log(`Error is occured >>> ${e}`);
} finally {
  console.log('End');
}

