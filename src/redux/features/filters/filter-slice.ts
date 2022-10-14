import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFiltersInitialState } from "../../../types";

const initialState: IFiltersInitialState = {
  statusFilter: "all",
  priorityFilters: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleStatus: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
    addPriorityFilters: (state, action: PayloadAction<string>) => {
      state.priorityFilters = !state.priorityFilters.includes(action.payload)
        ? [...state.priorityFilters, action.payload]
        : state.priorityFilters;
    },
    removePriorityFilters: (state, action: PayloadAction<string>) => {
      state.priorityFilters = state.priorityFilters.includes(action.payload)
        ? state.priorityFilters.filter((item) => item !== action.payload)
        : state.priorityFilters;
    },
  },
});

export const { addPriorityFilters, removePriorityFilters, toggleStatus } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
