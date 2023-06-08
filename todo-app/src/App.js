import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { 
  getTodoFromLocalStorage,
  saveTodoToLocalStorage,      
} from './utils/localstorage';

const App = () => {
  // get initial data from local storage
  const [todos, setTodos] = useState(getTodoFromLocalStorage("todos") ||[]);


  const addTodo = (value) => {
    const newTodos = [...todos, {text: value }];
    setTodos(newTodos);
    saveTodoToLocalStorage("todos", newTodos); // save to localstorage
  };

  const toggleTodo = (idx) => {
    const newTodos = [...todos];
    newTodos[idx].isCompleted = !newTodos[idx].isCompleted;
    setTodos(newTodos);
    saveTodoToLocalStorage("todos", newTodos); // save to localstorage
  };

  const deleteTodo = (idx) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
    saveTodoToLocalStorage("todos", newTodos); // save to localstorage
  };

  return (
    <div className='app'>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> 
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};

export default App;
