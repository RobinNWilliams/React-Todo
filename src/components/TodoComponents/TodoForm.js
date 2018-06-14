import react from 'react';

const TodoForm = props => {
    return (
        <div>
       
        <input type="text" onChange={props.updateTodos}
        placeholder="Add Todo"
        value={props.NewTodo}
        />
        < button onClick={props.updateTodos}>Add Todo</button>
       
        </div>
    )
}

    export default TodoForm;
