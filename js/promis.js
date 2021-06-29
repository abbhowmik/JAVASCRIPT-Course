console.log("this is a Promise tutorial");

// promis--> Reslove, Reject, Pending

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Functions: your promiss has been resolved");
        resolve();
      } else {
        console.log("Functions: your promis has not been resloved");
        reject("sorry not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("thanks for resolving my problem");
  })
  .catch(function (e) {
    console.log("Very bad Bro Because: " + e);
  });
