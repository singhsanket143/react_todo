import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList({ editTodo, deleteTodo, finishTodo }) {

    const todos = useSelector(state =>{
        return state.todos.todoList
    })

    function onDeleteTodo(id) {
        deleteTodo({id});
    }

    function onEditTodo(id, newTodo) {
        editTodo({id, newTodo})
    }

    function onFinishTodo(id, state) {
        finishTodo({id, state})
    }

    return (
        todos && todos.map(
            (todo) => <Todo 
                        key={todo.id} 
                        text={todo.text} 
                        isFinished={todo.isFinished} 
                        editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
                        deleteTodo={() => onDeleteTodo(todo.id)}
                        finishTodo={(state) => onFinishTodo(todo.id, state)}
        />)
    );
}

export default TodoList;