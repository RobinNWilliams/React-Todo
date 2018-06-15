import react from 'react';
import "./Todo.css";

const TodoForm = props => {
    return (
        <form>
        <input 
            onChange={props.handleTodoChange}
            type="text"
            name="Todo"
            value={props.value}
            placeholder="Add Todo"
            />
            <button onClick={props.handleAddTodo}>Add to List</button>
            <button onClick={props.handleClearTodo}>Clear List</button>       
        </form>
    );
};

    export default TodoForm;
