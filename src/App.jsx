import './App.css';
import TodoList from './featured/TodoList/TodoList.jsx';
import TodoForm from './featured/TodoForm.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const token = `Bearer ${import.meta.env.VITE_PAT}`;
    const options = {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    };

    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(url, options);

        if (!resp.ok) {
          throw new Error(`Request failed with status ${resp.status}`);
        }

        const data = await resp.json();

        const todos = data.records.map(record => ({
          id: record.id,
          title: record.fields.title,
          isCompleted: record.fields.isCompleted || false,
        }));

        setTodoList(todos);

      } catch (err) {
        setErrorMessage(err.message); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchTodos();
  }, []);

  function handleAddTodo(title) {
    const newTodo = { title: title, id: Date.now(), isCompleted: false };
    setTodoList([...todoList, newTodo]);
  }

  function handleIsCompleted(todoId) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  }

  function handleUpdateToDo(editedTodo) {
    const editedTodos = todoList.map((todo) => {
      if (todo.id === editedTodo.id) {
        return { ...editedTodo };
      } else {
        return todo;
      }
    });
    setTodoList(editedTodos);
  }

  return (
    <div>
      <h1>My To Do List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={handleIsCompleted}
        onUpdateTodo={handleUpdateToDo}
        isLoading={isLoading}
      />

      {errorMessage && (
        <>
          <hr />
          <p>{errorMessage}</p>
          <button onClick={() => setErrorMessage('')}>Dismiss</button>
        </>
      )}
    </div>
  );
}

export default App;
