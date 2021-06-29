console.log("this is a Promis callback functions tutorial");

const students = [
  {
    name: "harry",
    subject: "javascript",
  },
  {
    name: "Rohan",
    subject: "Machine Learning",
  },
];

function EnrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Your promiss has not been resolved");
      }
    }, 2000);
  });
}

function getStudent() {
  setTimeout(() => {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student have been fetched");
  }, 1000);
}

let newStudent = { name: "Ashis", subject: "python" };

EnrollStudent(newStudent)
  .then(function () {
    getStudent();
  })

  // or this

  // EnrollStudent(newStudent)
  //   .then(getStudent)
  .catch(function (e) {
    console.log("Sorry! Bro Because: " + e);
  });
// getStudent();
