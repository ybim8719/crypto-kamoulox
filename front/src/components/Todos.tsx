import React from 'react';
import Todo from './../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';


const Todos: React.FC<{items: Todo[], onRemove: (id: string) => void}> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => {
                return <TodoItem onRemoveTodo={props.onRemove.bind(null, item.id)} key={item.id} text={item.text} />
            })}
        </ul>
    )
}

export default Todos;