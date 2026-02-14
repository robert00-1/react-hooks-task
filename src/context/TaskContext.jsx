import React, { createContext, useState } from "react";

// Create the context
export const TaskContext = createContext();

// TaskProvider component
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Finish React project", completed: false }
  ]);

  // Add a new task
  const addTask = (name) => {
    if (!name) return;
    const newTask = { id: Date.now(), name, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}
