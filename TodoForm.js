import {v4 as uuid} from "uuid";
import { useState } from "react";
 
 function TodoForm({ addTodo }) {
  const[todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  function handleTaskInputChange(e) {
    setTodo({...todo, task:e.target.value});
  }

  return(
    <form>
      <input
        name = "task"
        type = "text"
        value = {todo.task}
        onChange = {handleTaskInputChange}
      />
      <button type="submit">Submit</button>
      <form onSubmit={handleSubmit}></form>
    </form>
  );


 }
 
 export default TodoForm;