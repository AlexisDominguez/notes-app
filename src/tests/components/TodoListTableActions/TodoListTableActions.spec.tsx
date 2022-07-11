import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TodoListTableActions from "../../../components/TodoListTableActions";

test("Check if actions popover shows", async () => {
  render(<TodoListTableActions />);
  fireEvent.click(screen.getByTestId("todo-list-table-actions-button"));

  // Waits the popover to appear in screen
  await waitFor(() => screen.getByRole("presentation"));

  expect(screen.getByText(/Complete Task/i)).toBeInTheDocument();
  expect(screen.getByText(/Delete Task/i)).toBeInTheDocument();
});
