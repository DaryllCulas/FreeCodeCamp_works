// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
  veggie() {
    console.log(`${this.name}`)
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
