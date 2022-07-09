import { Todo } from "../../models/Todo";

export const TODO_LIST_TABLE_COLUMNS = [
  {
    name: "Title",
    selector: (row: Todo) => row.title,
  },
  {
    name: "Date",
    selector: (row: Todo) => row.date,
  },
  {
    name: "status",
    selector: (row: Todo) => row.status,
  },
];
