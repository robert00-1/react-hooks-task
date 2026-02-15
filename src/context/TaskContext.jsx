import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish React project", completed: false },
    { id: 3, title: "Call the bank", completed: true },
    { id: 4, title: "Walk the dog", completed: false },
    { id: 5, title: "Read a book", completed: true }
  ]);

  async function addTask(title, id) {
    const newTask = { id, title, completed: false };

    // update frontend state
    setTasks(prev => [...prev, newTask]);

    //  update backend db.json
    await fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    });
  }

  async function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    const taskToUpdate = tasks.find(t => t.id === id);
    await fetch(`http://localhost:6001/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !taskToUpdate.completed })
    });
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}
