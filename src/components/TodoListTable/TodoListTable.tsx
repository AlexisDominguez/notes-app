import DataTable from "react-data-table-component";
import data from "../../mocks/components/TodoListTable/data.json";
import { Todo } from "../../models/Todo";
import { TODO_LIST_TABLE_COLUMNS } from "./constants";

const TodoListTable = () => (
  <div>
    <DataTable
      title="My Todo List"
      columns={TODO_LIST_TABLE_COLUMNS}
      data={data as Todo[]}
    />
  </div>
);

export default TodoListTable;
