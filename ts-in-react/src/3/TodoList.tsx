import Todo from "./Todo";

export type TodoType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TodoListType = {
  todos: TodoType[];
};
// way-1
// export default function TodoList({ todos }: TodoListType): JSX.Element {
//   return (
//     <>
//       <ul>
//         {todos.map((todo) => (
//           <Todo key={todo.id} {...todo} />
//         ))}
//       </ul>
//     </>
//   );
// }

// way-2
const TodoList: React.FC<TodoListType> = ({ todos }): JSX.Element => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
