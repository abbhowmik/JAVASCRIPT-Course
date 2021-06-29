console.log("this is an Iterator tutorial");

function arrayIterator(array) {
  arrayIndex = 0;
  return {
    next: function () {
      if (arrayIndex < array.length) {
        return {
          value: array[arrayIndex++],
          status: false,
        };
      } else {
        return {
          status: true,
        };
      }
    },
  };
}

let myArray = ["banana", "apple", "mango", "coconut"];
console.log(myArray);
let result = arrayIterator(myArray);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
