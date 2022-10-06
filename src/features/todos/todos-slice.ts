import { ITodosInitialState } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodosInitialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    added: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length + 1,
          name: action.payload,
          completed: false,
        },
      ];
    },
    statusToggled: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },
    deleted: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(
        (project) => project.id !== action.payload
      );
    },
    priorityAdded: (state, action: any) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, priority: action.payload.priority }
          : todo
      );
    },
    markCompleted: (state) => {
      state.todos = state.todos.map((todo) => {
        return { ...todo, completed: true };
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});
