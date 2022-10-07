import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./features/todos/todos-slice";

export const store = configureStore({
  reducer: {
    todo: todosSlice.reducer,
  },
});
