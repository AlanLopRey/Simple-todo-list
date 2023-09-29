//traer los elementos necesarios para el desarrollo del ejercicio que serian
//1 el form✔
//2 su input para agregarle el event listener cuando el usuario de enter (Evento submit creo)✔
//3 el div que contendra los todos para construir dentro la siguiente estructura cuando el usurio de enter ✔

// <div class="todo">
//   <span>Hola</span>
//   <span class="delete">&times;</span>
// </div>

//?Crear la funcion creadora de la estructura del todo
const form = document.querySelector("form"),
  input = document.querySelector("input"),
  todos = document.querySelector(".todos");

function todoMaker() {
  const todoWrapper = document.createElement("div");
  const todoText = document.createElement("span");
  const todoClose = document.createElement("span");

  todoWrapper.classList.add("todo");
  todoText.innerHTML = input.value;
  todoClose.innerHTML = "&times;";
  todoClose.classList.add("delete");
  todoWrapper.appendChild(todoText);
  todoWrapper.appendChild(todoClose);

  todos.appendChild(todoWrapper);

  input.value = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  todoMaker();
});

todos.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".delete")) {
    const todoToRemove = e.target.closest(".todo"); // Encuentra el elemento .todo más cercano al botón clicado
    if (todoToRemove) {
      todos.removeChild(todoToRemove); // Elimina el elemento .todo encontrado
    }
  }
});
