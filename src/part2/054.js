this.valueA = 'a';
console.log(this.valueA);

this.valueB = 'b';
console.log(this.valueB);

function checkThis() {
  console.log(this);
}

function checkThis2() {
  "use strict";
  console.log(this);
}

// checkThis(); // console.log(window)
checkThis2(); // console.log(undefined)

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const product1 = Product('bag', 2000);
// console.log(window.name);
// console.log(window.price);

const product2 = {
  name: 'bag2',
  price: 3000,
  getVAT() {
    return this.price / 10;
    // return 10;
  }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(price, VAT2);

const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);

const counter1 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(function() {
      this.count += 1;
      console.log(this.count);
    }, 1000)
  }
};
counter1.addAfter1Sec();

const counter2 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(() => {
      this.count += 1;
      console.log(this.count);
    }, 1000)
  }
};
counter2.addAfter1Sec();