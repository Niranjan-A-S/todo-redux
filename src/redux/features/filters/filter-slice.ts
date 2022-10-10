import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFiltersInitialState } from "./../../../types";

const initialState: IFiltersInitialState = {
  statusFilter: "all",
  priorityFilter: { low: false, moderate: false, high: false },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      state.statusFilter = action.payload;
    },
    togglePriorityDisplayCondition: (state, action: PayloadAction<any>) => {},
  },
});
