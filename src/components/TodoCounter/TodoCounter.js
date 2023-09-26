import styles from './TodoCounter.style'; 

function TodoCounter({ total, completed }) {
    return (
      <h1 style={styles.todoCounter}>
        Has completado {completed} de {total}
      </h1>
    );
}

export { TodoCounter };