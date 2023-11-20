import React, { createContext, useState } from "react";
import { useLocalStorage } from "./../../hooks/useLocalStorage/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const { 
        item: todos, 
        saveItem: saveTodos,
        loading,
        error 
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = useState('');
    
      const completedTodos = todos.filter(
        todo => !!todo.completed
      ).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );
    
      console.log('Log 3');
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

  return (
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }}>
        { children }
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };