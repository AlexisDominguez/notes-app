type TodoStatus = "active" | "completed" | "removed";

export interface Todo {
  id: number;
  description: string;
  date: string;
  status: TodoStatus;
}
