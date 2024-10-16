// const todoValue = document.querySelector(".todo-value") as HTMLInputElement;
// const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
// const clearTodos = document.querySelector(".clear-todos") as HTMLButtonElement;
// const todoList = document.querySelector(".todoList") as HTMLUListElement;
// // todo type
// interface Todo {
//   id: string;
//   title: string;
//   isCompleted: boolean;
// }
// // todos
// let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
// // focus in todo input
// const focusInput = () => todoValue.focus();
// const handelSubmit = () => {
//   if (todoValue.value) {
//     const newTodo: Todo = {
//       id: crypto.randomUUID(),
//       title: todoValue.value.trim(),
//       isCompleted: false,
//     };
//     addTodoToDom(newTodo);
//     todos.push(newTodo);
//     saveTodosInLocalStorage();
//     todoValue.value = "";
//     focusInput();
//   }
// };
// const addTodoToDom = (todo: Todo) => {
//   todoList.insertAdjacentHTML(
//     "beforeend",
//     `
//     <li onclick="removeTodo('${todo.id}')">
//         ${todo.title}
//         <span class="icon">
//             <i class="fas fa-trash"></i>
//         </span>
//     </li>
//     `
//   );
// };
// const saveTodosInLocalStorage = () => {
//   localStorage.setItem("todos", JSON.stringify(todos));
//   return true;
// };
// const removeTodo = (id: string) => {
//   todos = todos.filter((todo) => todo.id !== id);
//   saveTodosInLocalStorage();
//   todoList.innerHTML = "";
//   todos.forEach((todo) => addTodoToDom(todo));
// };
// const clearAllTodos = () => {
//   todos = [];
//   saveTodosInLocalStorage();
//   todoList.innerHTML = "";
// };
// addTodo.addEventListener("click", handelSubmit);
// clearTodos.addEventListener("click", clearAllTodos);
// window.addEventListener("keydown", (event) => {
//   if (event.code === "Enter") {
//     handelSubmit();
//   }
// });
// window.addEventListener("DOMContentLoaded", () => {
//   focusInput();
//   todos.forEach((todo) => addTodoToDom(todo));
// });
//# sourceMappingURL=sabz-todo-list.js.map