class Hamburger {
  constructor(size, base) {
    this.price = size.money + base.money;
    this.calories = size.calories + base.calories;
  }

  calculatePrice() {
    return this.price + ' тугриков';
  }
  calculateCalories() {
    return this.calories + ' калорий';
  }
  addTopping(toppingType) {
    this.price += toppingType.money;
    this.calories += toppingType.calories;
  }
}
Hamburger.SIZE_SMALL = {
  money: 50,
  calories: 20
};
Hamburger.SIZE_BIG = {
  money: 100,
  calories: 40
};
Hamburger.STUFFING_CHEESE = {
  money: 10,
  calories: 20
};
Hamburger.SALAD = {
  money: 20,
  calories: 5
};
Hamburger.POTATO = {
  money: 15,
  calories: 10
};
Hamburger.TOPPING_MAYO = {
  money: 20,
  calories: 5
};
Hamburger.TOPPING_SAUCE = {
  money: 15,
  calories: 0
};

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log('Calories: ' + hamburger.calculateCalories());

console.log('Price:' + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log('Price with sauce: ' + hamburger.calculatePrice());