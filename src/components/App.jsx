import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import { TaskProvider } from "../context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
    </TaskProvider>
  );
}
