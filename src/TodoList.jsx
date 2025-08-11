{/*extract from TodoList.jsx*/}
import ToDoListItem from "./TodoListItem"
function TodoList(){
    const todos = [
  {id: 1, title: "review resource"},
  {id:2, title: "take notes"},
  {id:3, title: "code out app"}
] 
   return( <ul>
    {todos.map(todo => (<ToDoListItem key={todo.id} todo={todo} />))}
    </ul>)
}

export default TodoList