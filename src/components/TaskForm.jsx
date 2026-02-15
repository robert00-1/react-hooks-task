import { useState, useContext, useId } from "react";
import { TaskContext } from "../context/TaskContext"; 


export default function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [ title, setTitle] = useState("");
   const id = useId(); 
 // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title, id);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`task-${id}`}>New Task:</label>
      <input 
      id={`task-${id}`}
      type="text"
      placeholder="Add a new task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}