// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.css";
import Todo from "./Todo";

// function component for the list

/*
props = {
    [
        { task: 'Take Nap', id: 100, completed: false, },
        { task: 'Mow Lawn', id: 101, completed: false, },
        { task: 'Fix Fence', id: 102, completed: false, },
    ],
}
*/

const TodoList = props => { // item === item[i]
    return props.todoArray.map(item => <Todo key={item.id} todoItem={item.task}></Todo>);
}

export default TodoList;


// <TodoList /> receives your Todos array and iterates over the list
// generating a new <Todo /> for each element in the array.

/*

go through the array, item by item. with each item, take out the important bit of information.
take the info and attach it to our <Todo> component

return the <Todo> component

.map( variableName => do stuff to variableName )

show up on browser:
• task
• new task

Todo component
 <li>{props.todoItem}</li>

HTML property
<div PROPERTYNAME="value"

*/


/*
our friend map

map goes through an array

let arr = [ 1, 2, 3, 4 ];

arr.map(value => console.log(value));
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
*/