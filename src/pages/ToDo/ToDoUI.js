import { TodoHeader } from "../../components/TodoHeader";
import { TodoCounter } from "./../../components/TodoCounter";
import { TodoSearch } from "./../../components/TodoSearch";
import { TodoList } from "./../../components/TodoLIst";
import { TodoItem } from "./../../components/TodoItem";
import { TodoButtom } from "./../../components/TodoButton";
import { TodosLoading } from "./../../components/TodosLoading";
import { TodosErrors } from "./../../components/TodosErrors";
import { TodosEmpty } from "./../../components/TodosEmpty";
import { TodoContext } from "./../../context/TodosContext";
import React, { useContext } from "react";
import { Modal } from "./../../components/Modal";
import { TodoForm } from "./../../components/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    addTodo, 
  } = useContext(TodoContext);

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completeTodo={completedTodos} />
        <TodoSearch
          searchValue={searchedTodos}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

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

      <TodoButtom setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export { AppUI };