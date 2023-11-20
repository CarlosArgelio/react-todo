import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoLIst";
import { TodoItem } from "./components/TodoItem";
import { TodoButtom } from "./components/TodoButton";
import { TodosLoading } from "./components/TodosLoading";
import { TodosErrors } from "./components/TodosErrors";
import { TodosEmpty } from "./components/TodosEmpty";
import { TodoContext } from "./context/TodosContext";
import { useContext } from "react";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />


          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosErrors />}
            {!loading && searchedTodos.length === 0 && <TodosEmpty />}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

      <TodoButtom />
    </>
  );
}

export { AppUI };
