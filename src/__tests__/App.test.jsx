import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from '../components/App.jsx';       
import { setFetchResponse, baseTasks } from '../setup.jsx'; 

describe("Task Manager App Full Integration", () => {
  beforeEach(() => setFetchResponse(baseTasks));

  it("renders initial tasks", () => {
    render(<App />);
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Finish React project")).toBeInTheDocument();
  });

  it("adds a task from App", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    // Use a unique task name for testing
    const newTask = "Walk the dog - test";
    fireEvent.change(input, { target: { value: newTask } });
    fireEvent.click(button);

    // Now it will only match the newly added task
    expect(screen.getByText(newTask)).toBeInTheDocument();
  });

  it("search filters tasks correctly", () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText("Search tasks...");
    fireEvent.change(searchInput, { target: { value: "buy" } });

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.queryByText("Finish React project")).toBeNull();
  });

  it("toggles task completion from App", () => {
    render(<App />);
    const checkbox = screen.getByTestId(1);
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});

