import './TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList-container">
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}

        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

        {props.render ? props.searchedTodos.map(props.render) : props.searchedTodos.map(props.children)}
      </ul>
    </section>
  );
}

export { TodoList };