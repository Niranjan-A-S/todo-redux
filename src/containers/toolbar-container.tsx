import { memo } from "react";
import styled from "styled-components";

import { ToolbarButton } from "../components";
import { statusFilters, priorityFilters } from "../data/filterValues";
import { useProjectActions } from "../hooks";
import { customUseSelector } from "../redux";

export const Toolbar = memo(() => {
  const {
    project: { projects },
  } = customUseSelector((state) => state);

  const count = projects.filter((todo) => !todo.completed).length;
  const suffix = count === 1 ? "" : "s";

  const {
    filterByStatus,
    togglePriority,
    handleSubmitClear,
    handleSubmitMark,
  } = useProjectActions();

  return (
    <ToolbarContainer>
      <ToolsWrapper>
        <strong>Actions</strong>
        <ToolbarButton text={"Mark All Finished"} onClick={handleSubmitMark} />
        <ToolbarButton text={"Clear Finished"} onClick={handleSubmitClear} />
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>
          Remaining
          <p>
            {count} Project{suffix}
          </p>
        </strong>
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Status</strong>
        <select onChange={filterByStatus}>
          {statusFilters.map(({ label, value }) => (
            <option key={value} value={value} children={value} />
          ))}
        </select>
      </ToolsWrapper>
      <ToolsWrapper>
        <strong>Filter by Priority</strong>
        {priorityFilters.map(({ color, id, label, value }) => {
          return (
            <FilterWrapper key={id}>
              <label style={{ color: color }} children={label} />
              <input
                value={value}
                key={label}
                type={"checkbox"}
                onChange={togglePriority}
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 10px;
  overflow-x: auto;
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
