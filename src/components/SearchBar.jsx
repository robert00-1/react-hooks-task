import { useRef, useState } from "react";
import TaskList from "./TaskList";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); // state triggers re-render for filtering
  const inputRef = useRef(); 

  const handleSearch = () => {
    setSearchTerm(inputRef.current.value); 
  };

  return (
    <div>
      <input
        ref={inputRef} // attach ref to input
        type="text"
        placeholder="Search tasks..."
        onChange={handleSearch}
        style={{ margin: "10px 0", padding: "5px", width: "250px" }}
      />
      <TaskList searchTerm={searchTerm} />
    </div>
  );
}
