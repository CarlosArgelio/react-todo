import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoLIst/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoButtom } from './components/TodoButton/TodoButton'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'la', completed: false },
  { text: 'Hacer ejercicio', completed: true },
  { text: 'LA', completed: true },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );


  return (
    <>
      <TodoCounter  
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>

        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onCompleted={completedTodos}
          />
        ))}
        {/* {[<TodoCounter />, <TodoList />]} */}

      </TodoList>

      <TodoButtom />
    </>
  );
}

export default App;
