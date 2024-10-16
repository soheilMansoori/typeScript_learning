"use strict";
// const $ = document as Document;
// const todoInput = $.getElementById("input") as HTMLInputElement;
// const addTodoBtn = $.getElementById("addTodoBtn") as HTMLButtonElement;
// const todoListWrapper = $.getElementById("todoListWrapper") as HTMLUListElement;
// const todoListClearBtn = $.getElementById("clearTodoBtn") as HTMLButtonElement;
// interface Todo {
//   id: string;
//   title: string;
// }
// // cleat input value
// const clearInput = () => (todoInput.value = "");
// // render todo list to dom
// const renderTodosToDOM = (): void => {
//   // local storage data
//   const localStorageData: null | Todo[] = JSON.parse(
//     localStorage.getItem("todo")
//   );
//   todoListWrapper.innerHTML = "";
//   if (localStorageData) {
//     localStorageData.forEach((todo) => {
//       todoListWrapper.insertAdjacentHTML(
//         "beforeend",
//         `
//         <li>
//             ${todo.title}
//             <span class="icon" data-todo-id="${todo.id}"  onclick='removeTodo(event)'>
//                 <i class="fas fa-trash"></i>
//             </span>
//         </li>
//         `
//       );
//     });
//   }
// };
// // create new todo
// const createTodo = (): void => {
//   if (todoInput.value) {
//     // local storage data
//     const localStorageData: null | Todo[] = JSON.parse(
//       localStorage.getItem("todo")
//     );
//     const newTodo: Todo = {
//       id: crypto.randomUUID(),
//       title: todoInput.value.trim(),
//     };
//     if (localStorageData) {
//       localStorage.setItem(
//         "todo",
//         JSON.stringify([...localStorageData, newTodo])
//       );
//     } else {
//       localStorage.setItem("todo", JSON.stringify([newTodo]));
//     }
//     renderTodosToDOM();
//     clearInput();
//     todoInput.focus();
//   }
// };
// // remove todo form dom
// const removeTodo = (event): void => {
//   // local storage data
//   const localStorageData: null | Todo[] = JSON.parse(
//     localStorage.getItem("todo")
//   );
//   const mainTodoId: string = event.target.dataset.todoId;
//   const filteredTodos: Todo[] = localStorageData.filter(
//     (todo) => todo.id !== mainTodoId
//   );
//   localStorage.setItem("todo", JSON.stringify(filteredTodos));
//   renderTodosToDOM();
// };
// // remove all todo's
// const removeAllTodos = (): void => {
//   localStorage.removeItem("todo");
//   renderTodosToDOM();
// };
// // remove all todo's event handlers
// todoListClearBtn.addEventListener("click", removeAllTodos);
// // add todo list with btn
// addTodoBtn.addEventListener("click", createTodo);
// // add todo list with enter key
// window.addEventListener("keydown", (event) => {
//   if (event.code === "Enter") {
//     createTodo();
//   }
// });
// // load todo list when page loaded
// window.addEventListener("DOMContentLoaded", () => {
//   renderTodosToDOM();
//   todoInput.focus();
// });
