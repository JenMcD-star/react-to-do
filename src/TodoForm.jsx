function TodoForm(){
    return(     
    <form>
    <label htmlFor="todo-input">Todo:</label>
    <input type="text" id="todoTitle"></input>
    <button> Add Todo </button>
    </form>
    );
}

export default TodoForm