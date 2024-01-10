import { useState } from "react";

function AddTodo({ addTodo }) {
    const [todoText, setTodoText] = useState('');

    function onAddTodo(todoText) {
        addTodo({todoText})
    }

    return (
        <>
            <input 
                placeholder="add your next todo...."
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button onClick={() => {
               onAddTodo(todoText)
               setTodoText('');
            }}>Submit</button>
        </>
    )

}

export default AddTodo;