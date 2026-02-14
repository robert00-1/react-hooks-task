import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
<<<<<<< HEAD
=======
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish React project", completed: false }
  ]);

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
>>>>>>> 526c541 (Fix rubric issues: update TaskList, TaskForm, and context to pass all tests)
}
