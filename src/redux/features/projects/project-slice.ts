import { IProjectFormData, IProjectsInitialState } from "../../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProjectsInitialState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    added: (state, action: PayloadAction<IProjectFormData>) => {
      state.projects = [
        ...state.projects,
        {
          id: state.projects.length + 1,
          projectName: action.payload.projectName,
          completed: false,
          priority: action.payload.priority,
        },
      ];
    },
    statusToggled: (state, action: PayloadAction<any>) => {
      state.projects = state.projects.map((todo) =>
        todo.id === action.payload.id &&
        todo.completed !== action.payload.completed
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },
    deleted: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    priorityAdded: (state, action: PayloadAction<any>) => {
      state.projects = state.projects.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, priority: action.payload.priority }
          : todo
      );
    },
    markCompleted: (state) => {
      state.projects = state.projects.map((todo) => {
        return { ...todo, completed: true };
      });
    },
    clearCompleted: (state) => {
      state.projects = state.projects.filter((todo) => !todo.completed);
    },
  },
});

export const {
  added,
  clearCompleted,
  deleted,
  markCompleted,
  priorityAdded,
  statusToggled,
} = projectSlice.actions;

export const projectReducer = projectSlice.reducer;
