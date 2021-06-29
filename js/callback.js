console.log("this is a callback functions tutorial");

// json format (array of object) which after comes form server
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

// it is a callback(function under function) function for the settimeout function
// here students acts as an objects
// here students acts as an objects
function EnrollStudent(student, callback) {
  setTimeout(() => {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 1000);
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

// newStudent object
let newStudent = { name: "Ashis", subject: "python" };

EnrollStudent(newStudent, getStudent);
// getStudent();
