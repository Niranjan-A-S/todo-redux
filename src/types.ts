import { TypedUseSelectorHook, useSelector } from "react-redux";

import { store } from "./redux/store";

export interface ITodosInitialState {
  todos: Array<ITodosDetails>;
}

export interface ITodosDetails {
  id: number;
  name: string;
  completed: boolean;
}

export interface IOption {
  label: string;
  value: string;
}

export interface IFiltersInitialState {
  statusFilter: string;
  priorityFilter: IPriorityFilters;
}

interface IPriorityFilters {
  low: boolean;
  moderate: boolean;
  high: boolean;
}

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;
