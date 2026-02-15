import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList({ searchTerm = "" }) {
  const { tasks, toggleTask } = useContext(TaskContext);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              data-testid={task.id}
            />
            {task.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
