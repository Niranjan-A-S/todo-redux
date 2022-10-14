import { ITodosDetails } from "../types";

export const filterTodos = (
  array: Array<ITodosDetails>,
  statusFilter: string,
  priorityFilters: Array<string>
) => {
  const filterOne =
    statusFilter === "remaining"
      ? array.filter((todo) => !todo.completed)
      : statusFilter === "completed"
      ? array.filter((todo) => !todo.completed)
      : array;

  return !priorityFilters.length
    ? filterOne
    : filterOne.filter((todo) => priorityFilters.includes(todo.priority));
};
