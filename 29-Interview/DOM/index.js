document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");

  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode === true) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        // add todos
        addTodoItem(todoText);
      }

      todoInput.value = "";
    } else {
      alert("Please add valid todo");
    }
    // prevent form submission
  });

  todoList.addEventListener("click", function (e) {
    const target = e.target;

    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;

      if (target.innerText === "❌") {
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });

  function addTodoItem(todotext) {
    const todoItem = document.createElement("li");
    const editItem = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = `<span>${todotext}</span>`;
    editItem.innerText = `✏️`;
    removeButton.innerText = `❌`;

    todoItem.appendChild(editItem);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
