import { useState } from "react";

function Todo({ finishTodo, editTodo, deleteTodo, text, isFinished }) {

    const [isEditting, setIsEditting] = useState(false);
    const [todoText, setTodoText] = useState(text);

    return (
        <div>  
            <input type="checkbox" checked={isFinished} onChange={() => finishTodo(!isFinished)} />
            {isEditting? <input value={todoText} onChange={(e) => setTodoText(e.target.value)} /> : <span> {todoText} </span>}
            <button onClick={() => {
                setIsEditting(!isEditting);
                editTodo(todoText);
            }}> {isEditting? 'Save' : 'Edit'} </button>
            <button onClick={deleteTodo}> Delete </button>
        </div>
    );
}
export default Todo;