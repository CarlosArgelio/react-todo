import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoLIst/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoButtom } from './components/TodoButom/TodoButtom'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar agua', completed: false },
  { text: 'Hacer ejercicio', completed: true }
]

function App() {
  return (
    <>
      <TodoCounter  completed={16} total={20}/>
      <TodoSearch />

      <TodoList>

        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
          />
        ))}
        {/* {[<TodoCounter />, <TodoList />]} */}

      </TodoList>

      <TodoButtom />
    </>
  );
}

export default App;
