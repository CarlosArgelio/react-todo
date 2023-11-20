import { useContext} from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../context/TodosContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = useContext(TodoContext)

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };