console.log("this is my exercise -2 solution");

// Create a new element
let divElem = document.createElement("div");

// setting localstorage to save the information
let val = localStorage.getItem("text");
let text;

if (val == null) {
  // Add text to that created element
  text = document.createTextNode("Click here to edit this text");
} else {
  text = document.createTextNode(val);
}

// appending the text with divelements
divElem.appendChild(text);
// setting the attirbutes(Give element id, style and class)
divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border:3px solid aqua; width:200px; margin: 34px; padding:23px;"
);

// Grab the main container
let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

container.insertBefore(divElem, first);

divElem.addEventListener("click", function () {
  let html = elem.innerHTML;
  // taking the length of the textareas, because we don't need to overwrite the html
  let noTextAreas = document.getElementsByClassName("textarea").length;

  if (noTextAreas == 0) {
    divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
  }

  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });

  console.logssss;
});
