import { TodoListType } from "./todoTypes";

export default function Todo(): JSX.Element {
  const todos: TodoListType = [
    { id: 1, title: "learn TS", isComplete: false },
    { id: 2, title: "learn Next", isComplete: false },
    { id: 3, title: "learn React", isComplete: true },
  ];
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} -{" "}
            <span style={{ color: todo.isComplete ? "green" : "red" }}>
              {todo.isComplete ? "Complete" : "unComplete"}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
