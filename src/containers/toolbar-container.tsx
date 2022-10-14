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

import {
  toggleStatus,
  addPriorityFilters,
  removePriorityFilters,
} from "../redux/features/filters";

import { markCompleted } from "../redux/features/todos";
import { customUseSelector, StoreDispatch } from "../types";

export const Toolbar = memo(() => {
  const completedTodosCount = customUseSelector(
    (state) => state.todo.todos.filter((todo) => !todo.completed).length
  );

  const dispatch = useDispatch<StoreDispatch>();

  const suffix = completedTodosCount === 1 ? "" : "s";

  const priorityFilters = [
    {
      id: 1,
      label: PriorityOptionLabels.LOW,
      color: PriorityOptionColors.LOW,
      value: PriorityOptionValues.LOW,
    },
    {
      id: 2,
      label: PriorityOptionLabels.MODERATE,
      color: PriorityOptionColors.MODERATE,
      value: PriorityOptionValues.MODERATE,
    },
    {
      id: 3,
      label: PriorityOptionLabels.HIGH,
      color: PriorityOptionColors.HIGH,
      value: PriorityOptionValues.HIGH,
    },
  ];

  const statusFilters = [
    { label: StatusOptionLabels.ALL, value: StatusOptionValues.ALL },
    {
      label: StatusOptionLabels.REMAINING,
      value: StatusOptionValues.REMAINING,
    },
    {
      label: StatusOptionLabels.COMPLETED,
      value: StatusOptionValues.COMPLETED,
    },
  ];

  const markAllCompleted = useCallback(() => {
    dispatch(markCompleted());
  }, [dispatch]);

  const clearCompleted = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  const addStatusFilter = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) =>
      dispatch(toggleStatus(event.target.value)),
    [dispatch]
  );

  const addPriorityFilters = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.target.checked
        ? dispatch(addPriorityFilters(event.target.value))
        : dispatch(removePriorityFilters(event.target.value));
    },
    [dispatch]
  );

  return (
    <ToolbarContainer>
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
        <SelectField selectOptions={statusFilters} onChange={addStatusFilter} />
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Priority</strong>
        {priorityFilters.map((priority) => {
          return (
            <FilterWrapper key={priority.id}>
              <label style={{ color: priority.color }}>{priority.label}</label>
              <input
                value={priority.value}
                key={priority.label}
                type={"checkbox"}
                onChange={addPriorityFilters}
              />
            </FilterWrapper>
          );
        })}
      </ToolsWrapper>
    </ToolbarContainer>
  );
});

const ToolbarContainer = styled.div`
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
