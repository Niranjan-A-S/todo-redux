import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFiltersInitialState } from "../../../types";

const initialState: IFiltersInitialState = {
  statusFilter: "all",
  priorityFilter: []
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleStatus: (state, action:PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
  addPriorityFilters:( state,action:PayloadAction<string>) => {
    state.priorityFilter = !state.priorityFilter.includes(action.payload) ? [...state.priorityFilter,action.payload] : state.priorityFilter 
  },
  removePriorityFilters:(state,action:PayloadAction<string>) => {
    state.priorityFilter = state.priorityFilter.includes(action.payload) ? state.priorityFilter.filter(item => item !== action.payload )  :state.priorityFilter
  }
  },
});
