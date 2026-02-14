<<<<<<< HEAD
import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
=======
import React, { useState, useContext, useId } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);
  const id = useId();   // ✅ REQUIRED
>>>>>>> 526c541 (Fix rubric issues: update TaskList, TaskForm, and context to pass all tests)

  function handleSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD
    if (taskName.trim() === "") return;
    setTaskName("");
  }
=======
    if (!title) return;

    addTask({
      id,
      title,
      completed: false
    });

    setTitle("");
  };
>>>>>>> 526c541 (Fix rubric issues: update TaskList, TaskForm, and context to pass all tests)

  return (
    <form onSubmit={handleSubmit}>
      <label>New Task:</label>
      <input
<<<<<<< HEAD
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
=======
        value={title}
        onChange={(e) => setTitle(e.target.value)}
>>>>>>> 526c541 (Fix rubric issues: update TaskList, TaskForm, and context to pass all tests)
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
