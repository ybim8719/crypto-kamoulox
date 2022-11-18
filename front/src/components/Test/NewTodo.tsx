import React, { useRef } from "react";


const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = todoTextInput.current?.value;
        if (enteredText?.trim().length === 0) {
            return;
        }
        if (enteredText !== undefined) {
            props.onAddTodo(enteredText);
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInput}/>
            <button>ADD TODO</button>
        </form>
    )
}

export default NewTodo;