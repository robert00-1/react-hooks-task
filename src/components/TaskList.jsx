import React, { useContext,useState } from "react";
import { TaskContext } from "../context/TaskContext";

<<<<<<< HEAD
function TaskList({query}) {
    const [tasks, setTasks] = useState([]);
    const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
=======
export default function TaskList({ searchTerm }) {
  const { tasks, toggleTask } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
>>>>>>> 526c541 (Fix rubric issues: update TaskList, TaskForm, and context to pass all tests)
  );

  return (
    <ul>
<<<<<<< HEAD
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button data-testid={task.id}>
            {task.completed ? "Undo" : "Complete"}
          </button>
=======
      {filteredTasks.map(task => (
        <li key={task.id} data-testid={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task. completed ? "Undo" : task.title}
          </label>
>>>>>>> 526c541 (Fix rubric issues: update TaskList, TaskForm, and context to pass all tests)
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
