import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let nextId = state.todoList.length + 1;
            state.todoList.push({id: nextId, text: action.payload.todoText, isFinished: false});
        },
        editTodo: (state, action) => {
            state.todoList =  state.todoList.map(todo => {
                if(todo.id == action.payload.id) {
                    todo.text = action.payload.newTodo;
                }
                return todo;
            });
        },
        deleteTodo: (state, action) => {
            state.todoList =  state.todoList.filter(todo => todo.id != action.payload.id);
        }, 
        finishTodo: (state, action) => {
            state.todoList = state.todoList.map(todo => {
                if(todo.id == action.payload.id) {
                    todo.isFinished = action.payload.state;
                }
                return todo;
            });
        }
    }
});

export const { deleteTodo, addTodo, editTodo, finishTodo } = todoSlice.actions;
export default todoSlice.reducer;