{/*extract from TodoList.jsx*/}
import TodoListItem from "./TodoListItem";


function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {

   const FilteredTodoList = todoList.filter(todo => !todo.isCompleted);

  return FilteredTodoList.length === 0 ? (
    <p>Add todo above to get started</p>
  ) : (
    <ul>
      {FilteredTodoList.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}

        />
      ))}
    </ul>
  );
}

export default TodoList;
