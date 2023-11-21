import React from 'react';
import { useTodos } from './../../hooks/useTodos/useTodos'
import { TodoHeader } from "../../components/TodoHeader";
import { TodoCounter } from "./../../components/TodoCounter";
import { TodoSearch } from "./../../components/TodoSearch";
import { TodoList } from "./../../components/TodoLIst";
import { TodoItem } from "./../../components/TodoItem";
import { TodoButtom } from "./../../components/TodoButton";
import { TodosLoading } from "./../../components/TodosLoading";
import { TodosErrors } from "./../../components/TodosErrors";
import { TodosEmpty } from "./../../components/TodosEmpty";
import { Modal } from "./../../components/Modal";
import { TodoForm } from "./../../components/TodoForm";
import { ChangeAlertWithStorageListener } from '../../components/ChangeAlert';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosErrors />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <TodosEmpty />}
        onEmptySearchResults={(searchText) => <p>{`No hay resultados para ${searchText}`}</p>}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}

      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <TodoButtom
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener 
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default App;