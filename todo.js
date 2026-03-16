const addBtn = document.getElementById("addBtn");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", addTodo);

// Enter lisää tehtävän
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {

    const text = input.value.trim();

    if (text === "") {
        alert("Kirjoita tehtävä ensin");
        return;
    }

    // luodaan li
    const li = document.createElement("li");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // tehtävän teksti
    const span = document.createElement("span");
    span.textContent = text;

    // Kun checkbox valitaan
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "none";
        }
    });

    // Poista nappi
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Poista";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // lisätään elementit li:hin
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // lisätään listaan
    list.appendChild(li);

    input.value = "";
}