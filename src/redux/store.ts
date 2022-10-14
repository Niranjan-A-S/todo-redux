import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./features/filters";
import { todosReducer } from "./features/todos";

export const store = configureStore({
  reducer: {
    todo: todosReducer,
    filter: filterReducer,
  },
});
