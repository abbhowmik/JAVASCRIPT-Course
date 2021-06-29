console.log("this is a tutorial of Object Oriented programing");

// this is object literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("car is running");
  },
};

// creating a constructors for cars

function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} car is running`);
  };

  this.analyze = function () {
    console.log(
      `this car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}

// this is the constractor(called when the object is created)
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Maruti Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);
