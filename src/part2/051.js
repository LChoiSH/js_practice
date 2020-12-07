class Cart {
  constructor() {
    this.store = {};
  }

  addProduct(product) {
    this.store[product.id] = product;
  }

  getProduct(id) {
    return this.store[id];
  }
}

const examCart = new Cart();

examCart.addProduct({id: 1, name: '노특북'});
console.log(examCart.store);

const p = examCart.getProduct(1);
console.log(p);