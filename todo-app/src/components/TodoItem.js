import React from "react";

const TodoItem = ({ todo, idx, toggleTodo, deleteTodo }) => {
    return (
    <div className="todo-item">
        <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
            </div>
        <button 
        type="button" 
        className="todo-btn primary"
        onClick={() => toggleTodo(idx)}
        >
            toggle
        </button>
        <button
        type="button"
        className="todo-btn danger"
        onClick={() => deleteTodo(idx)}
        >
            delete
        </button>
    </div>
    );
};

export default TodoItem;