import React from "react";

export default function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..." // matches test
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
