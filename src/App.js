import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>

        <TodoItem />
        <TodoItem />
        <TodoItem />

      </TodoList>

      <TodoBotom />
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Vacaciones en cancun</p>
      <span>X</span>
    </li>
  );
}

export default App;
