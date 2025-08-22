import './App.css'
import TodoList from './featured/TodoList/TodoList.jsx'
import TodoForm from './featured/TodoForm.jsx'
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

  function handleUpdateToDo(editedTodo){
    const editedTodoes = todoList.map((todo) => {
      if (todo.id == editedTodo.id){
        return {...editedTodo}
      } else {
        return todo
      }
    })
    setTodoList(editedTodoes)
  }

    return (
    <div>
      <h1>My To Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} 
      onCompleteTodo={handleIsCompleted} 
      onUpdateTodo={handleUpdateToDo}/>
    </div>
  )
}

export default App