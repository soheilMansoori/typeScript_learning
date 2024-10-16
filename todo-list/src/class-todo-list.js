"use strict";
class Todo {
    constructor(todoInput, todoList, addTodoBtn, clearTodosBtn) {
        this.todoInput = todoInput;
        this.todoList = todoList;
        this.addTodoBtn = addTodoBtn;
        this.clearTodosBtn = clearTodosBtn;
        this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
        this.addTodoBtn = addTodoBtn;
        this.todoList = todoList;
        this.todoInput = todoInput;
        this.clearTodosBtn = clearTodosBtn;
        this.render();
    }
    render() {
        this.clearTodosBtn.addEventListener("click", () => this.clearAllTodos());
        this.addTodoBtn.addEventListener("click", () => this.handelSubmit());
        window.addEventListener("DOMContentLoaded", () => {
            this.todos.forEach((todo) => this.addTodoToDom(todo));
            this.focusInput();
        });
        window.addEventListener("keydown", (event) => {
            if (event.code === "Enter") {
                this.handelSubmit();
            }
        });
    }
    handelSubmit() {
        if (this.todoInput.value) {
            const newTodo = {
                id: crypto.randomUUID(),
                title: this.todoInput.value.trim(),
                isCompleted: false,
            };
            this.addTodoToDom(newTodo);
            this.todos.push(newTodo);
            this.saveTodosInLocalStorage();
            this.todoInput.value = "";
            this.focusInput();
        }
    }
    addTodoToDom(newTodo) {
        this.todoList.insertAdjacentHTML("beforeend", `
      <li onclick="todo.removeTodo('${newTodo.id}')">
          ${newTodo.title}
          <span class="icon">
              <i class="fas fa-trash"></i>
          </span>
      </li>
      `);
    }
    focusInput() {
        this.todoInput.focus();
    }
    saveTodosInLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    removeTodo(id) {
        this.todoList.innerHTML = "";
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.saveTodosInLocalStorage();
        this.todos.forEach((todo) => this.addTodoToDom(todo));
    }
    clearAllTodos() {
        this.todoList.innerHTML = "";
        this.todos = [];
        this.saveTodosInLocalStorage();
    }
}
const todoInput = document.querySelector(".todo-value");
const todoList = document.querySelector(".todoList");
const addTodo = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const todo = new Todo(todoInput, todoList, addTodo, clearTodos);
