console.log("this a modern Fetch Api concept");
let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

// function getData() {
//   console.log("started getData");

//   url = "ashis.txt";
//   fetch(url)
//     .then((response) => {
//       console.log("Inside first then");
//       return response.text();
//       //   console.log("this is");
//     })
//     .then((data) => {
//       console.log("Inside second then");

//       console.log(data);
//     });
// }

function getData() {
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      return response.json(); // it return the parse(object) form
    })
    .then((data) => {
      console.log(data);
    });
}
getData();

// modified version

function postData() {
  // url = "https://dummy.restapiexample.com/api/v1/create";
  url = "https://jsonplaceholder.typicode.com/posts";
  params = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "this s",
      body: "and",
      userId: 1,
    }),
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
postData();

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
