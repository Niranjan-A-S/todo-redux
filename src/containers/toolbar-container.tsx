import { ChangeEvent, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ToolbarButton } from "../components";
import {
  PriorityOptionColors,
  PriorityOptionLabels,
  PriorityOptionValues,
  StatusOptionLabels,
  StatusOptionValues,
} from "../enums";
import { customUseSelector, StoreDispatch } from "../redux";
import {
  priorityFiltersAdded,
  priorityFiltersRemoved,
  statusToggled,
} from "../redux/features/filters";

import { clearCompleted, markCompleted } from "../redux/features/projects";

export const Toolbar = memo(() => {
  const dispatch = useDispatch<StoreDispatch>();
  const {
    project: { projects },
  } = customUseSelector((state) => state);

  const count = projects.filter((todo) => !todo.completed).length;
  const suffix = count === 1 ? "" : "s";

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

  const handleSubmitMark = useCallback(() => {
    dispatch(markCompleted());
  }, [dispatch]);

  const handleSubmitClear = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  const toggleStatus = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) =>
      dispatch(statusToggled(event.target.value)),
    [dispatch]
  );

  const togglePriority = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.target.checked
        ? dispatch(priorityFiltersAdded(event.target.value))
        : dispatch(priorityFiltersRemoved(event.target.value));
    },
    [dispatch]
  );

  return (
    <ToolbarContainer>
      <ToolsWrapper>
        <strong>Actions</strong>
        <ToolbarButton text={"Mark All Finished"} onClick={handleSubmitMark} />
        <ToolbarButton text={"Clear Finished"} onClick={handleSubmitClear} />
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Remaining Projects</strong>
        <p>
          <strong>{count}</strong> item{suffix} left
        </p>
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Status</strong>
        <select onChange={toggleStatus}>
          {statusFilters.map(({ label, value }) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
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
                onChange={togglePriority}
              />
            </FilterWrapper>
          );
        })}
      </ToolsWrapper>
      <AddButton>Add more projects...</AddButton>
    </ToolbarContainer>
  );
});

const ToolbarContainer = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 10px;
  overflow-x: auto;
  height: 190px;
`;

const ToolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  padding: 10px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  font-size: 20px;
  background: #764abc;
  color: #fff;
  grid-column: 2/4;
  padding: 5px 0;
`;
