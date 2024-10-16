import Navbar from "../components/Navbar/Navbar";
import TodoList, { TodoType } from "./3/TodoList";
function App() {
  const todos: TodoType[] = [
    {
      id: crypto.randomUUID(),
      title: "learn TS",
      isCompleted: true,
    },
    {
      id: crypto.randomUUID(),
      title: "learn Express",
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      title: "learn Next",
      isCompleted: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div>content</div>
      <TodoList todos={todos} />
    </>
  );
}

export default App;
