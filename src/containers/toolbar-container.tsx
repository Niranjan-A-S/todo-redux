import { useCallback } from "react";
import { ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SelectField } from "../common";
import { ToolbarButton } from "../components";
import { filterSlice } from "../redux/features/filters/filter-slice";
import { todosSlice } from "../redux/features/todos/todos-slice";
import { customUseSelector, StoreDispatch } from "../types";

const statusFilterOptions = [
  { label: "All", value: "all" },
  { label: "Remaining", value: "remaining" },
  { label: "Completed", value: "completed" },
];

export const ToolbarContainer = memo(() => {
  const completedTodosCount = customUseSelector(
    (state) => state.todo.todos.filter((todo) => !todo.completed).length
  );

  // const priorityFilterDisplayCondition = customUseSelector(
  //   (state) => state.filter.priorityFilter
  // );

  const dispatch = useDispatch<StoreDispatch>();

  const suffix = completedTodosCount === 1 ? "" : "s";

  const priorityFilters = [
    { id: 1, label: "Low", value: "low", color: "#2192FF" },
    { id: 2, label: "Moderate", value: "moderate", color: "#38E54D" },
    { id: 3, label: "High", value: "high", color: "#FF1E00" },
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

  const toggleDisplayConditions = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

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
        {priorityFilters.map((priority, index) => (
          <FilterWrapper key={index}>
            <label style={{ color: priority.color }}>
              <strong>{priority.label}</strong>
            </label>
            <input type={"checkbox"} onChange={toggleDisplayConditions} />
          </FilterWrapper>
        ))}
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
