// src/__tests__/App.test.jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../components/App"; // make sure App.jsx is in src/
import { TaskProvider } from "../context/TaskContext";

describe("Task Manager App", () => {
  test("renders initial tasks from the backend", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );
    
    await waitFor(() => {
      expect(screen.getByText("Buy groceries")).toBeInTheDocument();
      expect(screen.getByText("Finish React project")).toBeInTheDocument();
    });
  });

  test("adds a new task when the form is submitted", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );

    const input = screen.getByPlaceholderText("Add a new task...");
    const button = screen.getByText("Add Task");

    // Type new task
    fireEvent.change(input, { target: { value: "Walk the dog" } });
    fireEvent.click(button);

    // Wait for new task to appear
    await waitFor(() => {
      expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    });
  });

  test("filters tasks based on search input", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );

    const searchInput = screen.getByPlaceholderText("Search tasks...");

    // Type search term
    fireEvent.change(searchInput, { target: { value: "groceries" } });

    await waitFor(() => {
      expect(screen.getByText("Buy groceries")).toBeInTheDocument();
      expect(screen.queryByText("Finish React project")).not.toBeInTheDocument();
    });
  });

  test("toggles task completion state", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );

    // Find the checkbox for the first task
    const li = await screen.findByTestId("1");
    const checkbox = li.querySelector("input[type='checkbox']");

    // Click to toggle completion
    fireEvent.click(checkbox);

    // Wait for label text to change to "Undo"
    await waitFor(() => {
      expect(screen.getByText(/Undo/i)).toBeInTheDocument();
    });
  });
});
