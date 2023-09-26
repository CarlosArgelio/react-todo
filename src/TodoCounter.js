import './TodoCounter.css'

// const styles = {
//   fontSize: '24px',
//   textAlign: 'center',
//   margin: 0,
//   padding: '48px',
// }

function TodoCounter({ total, completed }) {
    return (
      <h1 >
        Has completado {completed} de {total}
      </h1>
    );
}

export { TodoCounter };