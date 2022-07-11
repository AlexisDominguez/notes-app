import { Todo } from "../../models/Todo";
import TodoListTableActions from "../TodoListTableActions";

export const TODO_LIST_TABLE_COLUMNS = [
  {
    name: "Description",
    selector: (row: Todo) => row.description,
    wrap: true,
    width: "50%",
  },
  {
    name: "Date",
    selector: (row: Todo) => row.date,
  },
  {
    name: "Status",
    selector: (row: Todo) => row.status,
  },
  {
    name: "Action",
    cell: () => <TodoListTableActions />,
    maxWidth: "50px",
    center: true,
  },
];
