export interface ITodosInitialState {
  todos: Array<ITodosDetails>;
}

export interface ITodosDetails {
  id: number;
  name: string;
  completed: boolean;
  priority: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface IFiltersInitialState {
  statusFilter: string;
  priorityFilters: Array<string>;
}
