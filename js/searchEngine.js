console.log("this is a search Engine Project ");

let searchBox = document.getElementById("searchBox");
let search = document.getElementById("search");
console.log(searchBox, search);

search.addEventListener("click", () => {
  let url = "https://www.google.com/search?q=" + searchBox.value;
  window.open(url, "_self");
});
