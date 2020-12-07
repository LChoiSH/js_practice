function Storage() {
  this.dataStore = {};
}

Storage.prototype.put = function(key, data) {
  this.dataStore[key] = data;
}

Storage.prototype.getData = function(key) {
  return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('1', {'name': 'keyboard', price: 1000});
console.log(productStorage);
console.log(productStorage.getData('1'));

// storage의 this를 가져옴
function RemovableStorage() {
  Storage.call(this);
}

// storage의 프로토타입 객채를 removableStorage 객체에 할당함
RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function() {
  this.dataStore = {};
}

const test = new RemovableStorage();
test.put('2', {'name': 'keyboard', price: 2200});
console.log(test);
