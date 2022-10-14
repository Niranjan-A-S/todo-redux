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
    statusToggled: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
    priorityFiltersAdded: (state, action: PayloadAction<string>) => {
      state.priorityFilters = !state.priorityFilters.includes(action.payload)
        ? [...state.priorityFilters, action.payload]
        : state.priorityFilters;
    },
    priorityFiltersRemoved: (state, action: PayloadAction<string>) => {
      state.priorityFilters = state.priorityFilters.includes(action.payload)
        ? state.priorityFilters.filter((item) => item !== action.payload)
        : state.priorityFilters;
    },
  },
});

export const { priorityFiltersAdded, priorityFiltersRemoved, statusToggled } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
