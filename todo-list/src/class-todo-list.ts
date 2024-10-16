interface TodoPattern {
  id: string;
  title: string;
  isCompleted: boolean;
}

class Todo {
  private todos: TodoPattern[] = JSON.parse(
    localStorage.getItem("todos") || "[]"
  );

  constructor(
    private todoInput: HTMLInputElement,
    private todoList: HTMLUListElement,
    private addTodoBtn: HTMLButtonElement,
    private clearTodosBtn: HTMLButtonElement
  ) {
    this.addTodoBtn = addTodoBtn;
    this.todoList = todoList;
    this.todoInput = todoInput;
    this.clearTodosBtn = clearTodosBtn;
    this.render();
  }

  private render(): void {
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

  private handelSubmit(): void {
    if (this.todoInput.value) {
      const newTodo: TodoPattern = {
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

  private addTodoToDom(newTodo: TodoPattern): void {
    this.todoList.insertAdjacentHTML(
      "beforeend",
      `
      <li onclick="todo.removeTodo('${newTodo.id}')">
          ${newTodo.title}
          <span class="icon">
              <i class="fas fa-trash"></i>
          </span>
      </li>
      `
    );
  }

  private focusInput(): void {
    this.todoInput.focus();
  }

  private saveTodosInLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  private removeTodo(id: string): void {
    this.todoList.innerHTML = "";
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodosInLocalStorage();
    this.todos.forEach((todo) => this.addTodoToDom(todo));
  }

  private clearAllTodos(): void {
    this.todoList.innerHTML = "";
    this.todos = [];
    this.saveTodosInLocalStorage();
  }
}

const todoInput = document.querySelector(".todo-value") as HTMLInputElement;
const todoList = document.querySelector(".todoList") as HTMLUListElement;
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
const clearTodos = document.querySelector(".clear-todos") as HTMLButtonElement;

const todo = new Todo(todoInput, todoList, addTodo, clearTodos);
