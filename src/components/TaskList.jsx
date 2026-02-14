import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList({ searchTerm }) {
  const { tasks, toggleComplete } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          data-testid={task.id} // matches test
          onClick={() => toggleComplete(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {task.name}
        </li>
      ))}
    </ul>
  );
}
