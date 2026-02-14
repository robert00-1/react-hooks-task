import React from "react";

export default function SearchBar({ setSearchTerm }) {
  return (
    <input
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
