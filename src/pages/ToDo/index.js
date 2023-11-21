import React from 'react';
import { AppUI } from './ToDoUI';
import { TodoProvider } from '../../context/TodosContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;