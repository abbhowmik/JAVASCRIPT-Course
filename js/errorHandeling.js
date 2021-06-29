console.log("this is a error handeling tutorial form scratch");
let a = "Harry Bhai";
a = undefined;
if (a != undefined) {
  throw new Error("this is not undefined");
} else {
  console.log("this is undefined");
}

try {
  console.log("we are inside try blocks");
  null.console;
  functionHarry();
} catch (error) {
  console.log("!!error");
  console.log(error.name);
  console.log(error.message);
}
