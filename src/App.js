import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { TodoButtom } from './TodoButtom'


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
