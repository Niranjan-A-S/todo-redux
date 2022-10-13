import { ChangeEvent, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { SelectField } from "../common";
import { ToolbarButton } from "../components";
import {
  PriorityOptionColors,
  PriorityOptionLabels,
  PriorityOptionValues,
  StatusOptionLabels,
  StatusOptionValues,
} from "../enums";
import { filterSlice } from "../redux/features/filters/filter-slice";
import { todosSlice } from "../redux/features/todos/todos-slice";
import { customUseSelector, StoreDispatch } from "../types";

const statusFilterOptions = [
  { label: StatusOptionLabels.ALL, value: StatusOptionValues.ALL },
  { label: StatusOptionLabels.REMAINING, value: StatusOptionValues.REMAINING },
  { label: StatusOptionLabels.COMPLETED, value: StatusOptionValues.COMPLETED },
];

export const ToolbarContainer = memo(() => {
  const completedTodosCount = customUseSelector(
    (state) => state.todo.todos.filter((todo) => !todo.completed).length
  );

  const dispatch = useDispatch<StoreDispatch>();

  const suffix = completedTodosCount === 1 ? "" : "s";

  const priorityFilters = [
    { id: 1, label: PriorityOptionLabels.LOW, color: PriorityOptionColors.LOW },
    {
      id: 2,
      label: PriorityOptionLabels.MODERATE,
      color: PriorityOptionColors.MODERATE,
    },
    {
      id: 3,
      label: PriorityOptionLabels.HIGH,
      color: PriorityOptionColors.HIGH,
    },
  ];

  const markAllCompleted = useCallback(() => {
    dispatch(todosSlice.actions.markCompleted());
  }, [dispatch]);

  const clearCompleted = useCallback(
    () => dispatch(todosSlice.actions.clearCompleted()),
    [dispatch]
  );

  const filterByStatus = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) =>
      dispatch(filterSlice.actions.toggleStatus(event.target.value)),
    [dispatch]
  );

  const addPriorityFilters = useCallback(
    (event: ChangeEvent<HTMLInputElement>, label: string) => {
      switch (label) {
        case PriorityOptionLabels.LOW:
          event.target.checked
            ? dispatch(
                filterSlice.actions.addPriorityFilters(PriorityOptionValues.LOW)
              )
            : dispatch(
                filterSlice.actions.removePriorityFilters(
                  PriorityOptionValues.LOW
                )
              );
          break;
        case PriorityOptionLabels.MODERATE:
          event.target.checked
            ? dispatch(
                filterSlice.actions.addPriorityFilters(
                  PriorityOptionValues.MODERATE
                )
              )
            : dispatch(
                filterSlice.actions.removePriorityFilters(
                  PriorityOptionValues.MODERATE
                )
              );
          break;
        case PriorityOptionLabels.HIGH:
          event.target.checked
            ? dispatch(
                filterSlice.actions.addPriorityFilters(
                  PriorityOptionValues.HIGH
                )
              )
            : dispatch(
                filterSlice.actions.removePriorityFilters(
                  PriorityOptionValues.HIGH
                )
              );
          break;
      }
    },
    [dispatch]
  );

  return (
    <ToolbarWrapper>
      <ToolsWrapper>
        <strong>Actions</strong>
        <ToolbarButton text={"Mark All Finished"} onClick={markAllCompleted} />
        <ToolbarButton text={"Clear Finished"} onClick={clearCompleted} />
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Remaining Todos</strong>
        <p>
          <strong>{completedTodosCount}</strong> item{suffix} left
        </p>
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Status</strong>
        <SelectField
          selectOptions={statusFilterOptions}
          onChange={filterByStatus}
        />
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Priority</strong>
        {priorityFilters.map((priority) => {
          return (
            <FilterWrapper key={priority.id}>
              <label style={{ color: priority.color }}>{priority.label}</label>
              <input
                key={priority.label}
                type={"checkbox"}
                onChange={(event) => addPriorityFilters(event, priority.label)}
              />
            </FilterWrapper>
          );
        })}
      </ToolsWrapper>
    </ToolbarWrapper>
  );
});

const ToolbarWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  overflow-x: auto;
  height: 130px;
`;

const ToolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
