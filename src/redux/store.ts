import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./features/filters/filter-slice";
import { todosSlice } from "./features/todos/todos-slice";

export const store = configureStore({
  reducer: {
    todo: todosSlice.reducer,
    filter: filterSlice.reducer,
  },
});
