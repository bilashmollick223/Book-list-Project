//Dom selection
// Even Listener
//  basic validation
// create element
// append

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (a) {
  a.preventDefault();
  //basic validition
  if (title.value == "" && author.value == "" && year.value == "") {
    alert("please input your information");
  } else {
    const newRow = document.createElement("tr");
    //create new item one
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);
    //create new item two
    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);
    //create new item thare
    const newYear = document.createElement("th");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
