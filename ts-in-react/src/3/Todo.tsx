import { TodoType } from "./TodoList";

export default function Todo({ title, isCompleted }: TodoType): JSX.Element {
  return (
    <>
      <li>
        <h2>
          {title} -{" "}
          <span style={{ color: isCompleted ? "green" : "red" }}>
            {isCompleted ? "Complete" : "unComplete"}
          </span>
        </h2>
      </li>
    </>
  );
}
