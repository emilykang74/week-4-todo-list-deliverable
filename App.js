import React from "react";
import {useState} from "react";
 import "./App.css";
 import TodoForm from "./components/TodoForm";
 import TodoList from "./components/TodoList";
 
 function App() {

  const[todos, setTodos] = useState([])
 
 function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id)
         setTodos(newTodos)
      }
    
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  return (
        <div className = "App">
            <header className = "App-header">
                <p>React Todo</p>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} toggleComplete={toggleComplete} />
            </header>
        </div>
    );
 }
 
 export default App;