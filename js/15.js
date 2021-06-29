console.log("this is a ES6 classes and Inheritence code");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  // these are the prototypes

  slogan() {
    return `I am ${this.name} and I am an employee of this company`;
  }

  joiningYear() {
    return 2021 - this.experience;
  }

  // it is static file means it is not dependent to creating an object,we can directly access this by employee class

  static add(a, b) {
    return a + b;
  }
}

// now Programmer class will Inherited the Employee class
class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    // by calling super method we are accessable for the other properties of the employee class
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.githubId = github;
  }

  // these are the prototyptes of the class
  favouriteLanguage() {
    if (this.language == "python") {
      return "python";
    } else {
      return "Javascript";
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

// harry = new Employee("Harry", 56, "TopclassProgrammer");
// console.log(harry);

ashis = new Programmer("Ashis", 4, "Kurkure", "C++", "Ashis458");

console.log(ashis);
