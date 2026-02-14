import React, { useState } from "react";
import { TaskProvider } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TaskProvider>
      <div>
        <h1>Task Manager</h1>
        <TaskForm />
        <SearchBar setSearchTerm={setSearchTerm} />
        <TaskList searchTerm={searchTerm} />
      </div>
    </TaskProvider>
  );
}
