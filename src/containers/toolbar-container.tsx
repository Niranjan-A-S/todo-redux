import { useDispatch } from "react-redux";
import styled from "styled-components";
import { SelectField } from "../common";
import { ToolbarButton } from "../components";
import { todosSlice } from "../redux/features/todos/todos-slice";
import { customUseSelector, StoreDispatch } from "../types";

const statusFilterOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

const priorityFilterOptions = [
  { label: "All", value: "all" },
  { label: "Low", value: "low" },
  { label: "Moderate", value: "moderate" },
  { label: "High", value: "high" },
];

export const Toolbar = () => {
  const count = customUseSelector(
    (state) => state.todo.todos.filter((todo) => !todo.completed).length
  );

  const suffix = count === 1 ? "" : "s";

  const dispatch = useDispatch<StoreDispatch>();

  const markAllCompleted = () => dispatch(todosSlice.actions.markCompleted());

  const clearCompleted = () => dispatch(todosSlice.actions.clearCompleted());

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
          <strong>{count}</strong> item{suffix} left
        </p>
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Status</strong>
        <SelectField selectOptions={statusFilterOptions} />
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Priority</strong>
        <SelectField selectOptions={priorityFilterOptions} />
      </ToolsWrapper>
    </ToolbarWrapper>
  );
};

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
