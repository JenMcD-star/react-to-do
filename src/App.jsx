import './App.css'
import TodoList from './TodoList.jsx'
import TodoForm from './TodoForm.jsx'
import { useState } from 'react'
function App() {
  const [todoList, setTodoList] = useState([])

  function handleAddTodo(title){
    const newTodo = {title: title, id: Date.now()}
    setTodoList([...todoList, newTodo])
  }
  return (
    <div>
      <h1>My To Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App