import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList({ searchTerm }) {
  const { tasks, toggleTask } = useContext(TaskContext);

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filtered.map((task) => (
        <li key={task.id} data-testid={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.completed ? "Undo" : task.title} {/* ← text inside label */}
          </label>
        </li>
      ))}
    </ul>
  );
}
