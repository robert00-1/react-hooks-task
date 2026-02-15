import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, beforeEach, expect } from "vitest";
import { TaskProvider } from "../../context/TaskContext";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

// Mock initial tasks
global.baseTasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish React project", completed: false },
];

global.setFetchResponse = (val) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(val),
      ok: true,
      status: 200,
    })
  );
};

describe("Task Manager App", () => {
  beforeEach(() => {
    global.setFetchResponse(global.baseTasks);
  });

  it("renders initial tasks from context", () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Finish React project")).toBeInTheDocument();
  });

  it("adds a new task when the form is submitted", () => {
    render(
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    );

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    // Use a unique task title to avoid duplicates
    fireEvent.change(input, { target: { value: "Go jogging" } });
    fireEvent.click(button);

    expect(screen.getByText("Go jogging")).toBeInTheDocument();
  });

  it("filters tasks based on search input", () => {
    render(
      <TaskProvider>
        <TaskList searchTerm="buy" />
      </TaskProvider>
    );

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.queryByText("Finish React project")).toBeNull();
  });

  it("toggles task completion state", () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    const checkbox = screen.getByTestId(1);
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
