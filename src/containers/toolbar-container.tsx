import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ToolbarButton, ToolbarFilters } from "../components";
import { todosSlice } from "../features/todos/todos-slice";
import { customUseSelector, StoreDispatch } from "../types";

export const Toolbar = () => {
  const count = customUseSelector((state) => state.todo.todos.length);

  const dispatch = useDispatch<StoreDispatch>();

  const markAllCompleted = () => dispatch(todosSlice.actions.markCompleted());

  const clearCompleted = () => dispatch(todosSlice.actions.clearCompleted());

  const statusFilterOptions = [
    { label: "Show All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Finished", value: "finished" },
  ];

  const priorityFilterOptions = [
    { label: "Show All", value: "" },
    { label: "Low", value: "low" },
    { label: "Moderate", value: "moderate" },
    { label: "High", value: "high" },
  ];

  return (
    <ToolbarWrapper>
      <strong>Remaining todos: {count}</strong>
      <ToolbarFilters
        filterCriterion={"Filter By Status"}
        filterOptions={statusFilterOptions}
        onChange={() => {}}
      />
      <ToolbarFilters
        filterCriterion={"Filter By Priority"}
        filterOptions={priorityFilterOptions}
        onChange={() => {}}
      />
      <ToolbarButton text={"Mark All Finished"} onClick={markAllCompleted} />
      <ToolbarButton text={"Clear Finished"} onClick={clearCompleted} />
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  font-size: 18px;
  padding: 30px;
  display: flex;
  gap: 10px;
`;
