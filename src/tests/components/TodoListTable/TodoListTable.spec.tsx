import { render, screen } from "@testing-library/react";
import TodoListTable from "../../../components/TodoListTable";

test("Checks if the todo list table renders in screen", () => {
  render(<TodoListTable />);

  expect(screen.getByRole("table")).toBeInTheDocument();
});
