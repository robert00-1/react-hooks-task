import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test } from "vitest";
import App from "../../components/App";
import { TaskProvider } from "../../context/TaskContext";

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

    fireEvent.change(input, { target: { value: "Walk the dog" } });
    fireEvent.click(button);

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

    // Get the checkbox for "Buy groceries"
    const checkbox = screen.getByLabelText("Buy groceries");

    // Click to toggle completion
    fireEvent.click(checkbox);

    // Wait for the label text to change to "Undo"
    await waitFor(() => {
      expect(screen.getByText("Undo")).toBeInTheDocument();
    });
  });

});
