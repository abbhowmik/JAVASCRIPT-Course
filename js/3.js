console.log('this is array tutorial')

let marks = [1, 2,3, 4, 5, 6];
const fruit = ['Apple', 'Mango', 'Banana']
const mixed = ['Ashis', 34, [5, 6,9]]
const arr = new Array(36, 78, 34, 'orange')
console.log(marks)
// marks[0] = 34;
console.log(marks)
console.log(mixed)
console.log(arr.length)
console.log(Array.isArray(marks))
console.log(Array.isArray('dkfjdf'))

// Mutating or Modifying arrays

let marks2 = [4, 5, 6]
marks  = marks.concat(marks2);
console.log(marks);

let obj = {
    name: 'Ashis',
    degree: 'B.Tech(CSE)',
    marks: [67,78, 455]
}
console.log(obj)
console.log(obj.degree)
console.log(obj['name'])
// console.clear()