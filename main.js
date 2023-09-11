let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let btn = document.querySelector(".btn");
let bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Pleace Input Your Info");
  } else {
    let newRow = document.createElement("tr");

    let newTitle = document.createElement("th");
    newTitle.textContent = title.value;
    console.log(newTitle);
    newRow.appendChild(newTitle);

    let newAuthor = document.createElement("th");
    newAuthor.textContent = author.value;
    newRow.appendChild(newAuthor);

    let newYear = document.createElement("th");
    newYear.textContent = year.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }
});
