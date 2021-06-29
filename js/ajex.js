console.log("this is ajex concept tutorial");

// fetch Button
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have click the btn");

  // instantiate(created) an xhr(XmlHttpRequest) object
  const xhr = new XMLHttpRequest();

  // xhr.open("GET", "ashis.txt", true); // here true means asynchronous
  // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getAllResponseHeaders("Content-type", "application/json"); // it helps to take the post requests
  // xhr.getAllResponseHeaders(
  //   "Content-type",
  //   "application/x-www-form-urlencoded"
  // ); // it helps to take the post requests

  // what to do on progress(optional)
  // xhr.onprogress = function () {
  //   console.log("on Progress");
  // };

  // optional
  // xhr.onreadystatechange = function () {
  //   console.log("ready state is ", xhr.readyState); // it returns the state of our code
  // };

  // // showing the user when the programme is loading(mendatory for showing data in console)
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("some error occured!!!");
    }
  };

  // send the request
  let params = `{"name":"test","salary":"123","age":"23"}`;
  xhr.send(params);

  console.log("We are done");
}

// Pop Button
let popBtn = document.getElementById("populateBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("you have clicked the button");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let InformationData = json.data;
      console.log(InformationData);
      InformationData.forEach(function (info) {
        console.log(info.employee_age);
      });
    } else {
      console.log("there are some error");
    }
  };

  xhr.send();
}

// function popHandler() {
//   console.log("you have clicked the popHandler Button");

//   const xhr2 = new XMLHttpRequest();

//   xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       let obj = JSON.parse(this.responseText); // it convert the strings into array
//       console.log(obj);
//       // collection = obj.data();

// //       let list = document.getElementById("list");
// //       str = "";
// //       for (key in obj) {
// //         str += `<li>${obj[key].employee_name} </li>`;
// //       }

// //       list.innerHTML = str;
// //     } else {
// //       console.log("Some Error occoured");
// //     }
//   };

//   xhr.send();
//   console.log("We are already done");
// // }
