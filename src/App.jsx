import './App.css'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'
import { useState } from 'react'
function App() {
  const [todoList, setTodoList] = useState([])

  function handleAddTodo(title){
    const newTodo = {title: title, id: Date.now(), isCompleted: false}
    setTodoList([...todoList, newTodo])
  }

  function handleIsCompleted(todoId){
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo
    });
    setTodoList(updatedTodos)
  }

    return (
    <div>
      <h1>My To Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} onCompleteTodo={handleIsCompleted}/>
    </div>
  )
}

export default App