// console.log("the is a a regualar expresstion tutorial");
// // characters sets []
// // const regex = /h[a-z]Rry/i;
// let regex = /h[a-z]rry/;
// regex = /h[^bc]rr[y]/;
// regex = /h[a-zA-z]rr[yu0-9][0-7]/;

// // Quantifiers {}
// regex = /har{2}y/;
// regex = /har{0,2}y/;

// // Groupings()
// regex = /(har){2}/;
// regex = /(har){2}([0-9]r){2}/;

// // white space
// regex = /harry[\w\s]+vai/;

// let str = "harr73 vai";
// str = "hary vai";
// // for white space
// str = "harry      vai";

// let result = regex.exec(str);
// console.log(result);

// // console.log(regex.test(str));

// if (regex.test(str)) {
//   console.log(`${str}: matches with: ${regex.source}`);
// } else {
//   console.log(`${str}: doesn't matches with: ${regex.source}`);
// }

let regex = /(a-z){0,15}[\w\s]+(a-z){0,20}/i;
// regex = /^[a-zA-Z]$+/;
regex = /^[a-zA-Z][\w\s+]{2,20}$/;

let str = "Bed Biswas";
// str = "433asj dkjfad f34";

console.log(regex, str);

if (regex.test(str)) {
  console.log("It successfully matched");
} else {
  console.log("Failed");
}
