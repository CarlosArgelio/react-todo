import React, { useState } from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoLIst/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoButtom } from './components/TodoButton/TodoButton'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar agua', completed: false },
  { text: 'Hacer ejercicio', completed: true }
]

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


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

        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        {/* {[<TodoCounter />, <TodoList />]} */}

      </TodoList>

      <TodoButtom />
    </>
  );
}

export default App;
