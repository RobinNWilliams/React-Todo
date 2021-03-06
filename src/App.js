import React from 'react'
import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            TodoList: "Things to do",
            Todo: [
                {
                    task: 'Take Nap',
                    id: 100,
                    completed: false,
                },
                {
                    task: 'Mow Lawn',
                    id: 101,
                    completed: false,
                },

                {
                    task: 'Fix Fence',
                    id: 102,
                    completed: false,
                },
            ],
            Todos: ""
        };
    }

    render() {
        return (
            <ul>
                <TodoList todoArray={this.state.Todo} />
            </ul>
        )
    }
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
}

export default App;