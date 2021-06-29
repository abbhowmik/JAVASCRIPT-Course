console.log("this is a generator concept tutorial");
function* Generators() {
  let i = 0;
  //   yield 1;
  //   yield 2;
  //   yield 3;
  //   yield 4;
  //   yield 5;
  while (true) {
    yield i++;
  }
}
const genValue = Generators();
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());
console.log(genValue.next());

// console.log(genValue.next()); // here generator's status is true means it is ends
