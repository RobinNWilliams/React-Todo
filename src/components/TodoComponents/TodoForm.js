import react from 'react';

const TodoForm= props=> {
    return (
        <div>
        <h2>{this.state.TodoList}</h2>
        <input type="text" onChange={this.changeTodoList}
        placeholder="Add Todo"
        value={this.state.Todo}
        />
        < button onSubmit={this.addTodo}>Add Todo</button>
       
        </div>
    )
}
}
    )
}