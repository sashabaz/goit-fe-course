const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

function Cashier(name, productDatabase) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  this.getCustomerMoney = value => {
    this.customerMoney = value;
  };
  this.countTotalPrice = order => {
    let sum = 0;
    for (key in order) {
      sum += order[key] * this.productDatabase[key];
    }
    return sum;
  };

  this.countChange = totalPrice =>
    this.customerMoney > totalPrice ? this.customerMoney - totalPrice : null;

  this.onSuccess = change => {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };
  this.onError = () => {
    console.log('Очень жаль, вам не хватает денег на покупки');
  };
  this.reset = () => {
    this.customerMoney = 0;
  };
}

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1,
};

const mango = new Cashier('Mango', products);

const totalPrice = mango.countTotalPrice(order);

console.log(totalPrice);

mango.getCustomerMoney(300);

console.log(mango.customerMoney);

const change = mango.countChange(totalPrice);

console.log(change);

if (change !== null) {
  mango.onSuccess(change);
} else {
  mango.onError();
}

mango.reset();

console.log(mango.customerMoney);
