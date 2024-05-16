let textArea = document.getElementById("textArea");
let submit = document.getElementById("submit");
let ul = document.querySelector("ul");
let deleteIcon = document.createTextNode(" X ");


let addTodos = submit.addEventListener("click", function() {
  let value = textArea.value;
  let li = document.createElement("li");
  li.textContent = value;
  let listItem = ul.appendChild(li);
  for (var i = 0; i < listItem.length;i++){
    li += " X ";
  }
  textArea.value = "";
});