import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { filterReducer } from "./features/filters";
import { todosReducer } from "./features/todos";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;

export const {
  filter: { priorityFilters, statusFilter },
  todo: { todos },
} = store.getState();
