//deleting the activities
const scroll = document.querySelector(".scroll");

scroll.addEventListener("click", function (e) {
  if (e.target.className === "del") {
    const todo = e.target.parentElement;
    scroll.removeChild(todo);
    alert("Yaay, you finished a task :)");
  }
});

const addForm = document.forms["form-one"];
addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const todo1 = document.createElement("div");
  const list1 = document.createElement("div");
  const del1 = document.createElement("div");

  //add content
  list1.textContent = value;
  del1.textContent = "-";

  //adding classes
  list1.classList.add("list");
  del1.classList.add("del");

  //append to document
  todo1.appendChild(list1);
  todo1.appendChild(del1);

  if (value == "") {
    alert("enter valid input");
  } else {
    scroll.appendChild(todo1);
    todo1.innerHTML += "<br />";
  }
  document.getElementById("myInput").value = "";
});
