let user = {
  name: "hoon"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
let descriptor2 = Object.getOwnPropertyDescriptor(user, 'no');
console.log(descriptor);
console.log(descriptor2);

let user2 = {};
Object.defineProperty(user2, 'name', {
  value: 'son',
  enumerable: true,
  configurable: true,
  writable: false
});

console.log(user2.name);
user2.name = "vvvv";
console.log(user2.name);

let user3 = {
  name: "choi",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user3, 'toString', {
  enumerable: false
})
for(let key in user3) {
  console.log(key);
}

let user4 = {};
Object.defineProperty(user4, 'name', {
  value: 'fix',
  configurable: false
});

console.log(user4.name);
delete user4.name;
console.log(user4.name);

Object.defineProperty(user4, 'name', {
  // value: 'fix',
  configurable: true
  // writable: true
});