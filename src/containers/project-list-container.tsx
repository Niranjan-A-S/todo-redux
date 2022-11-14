import { useCallback, ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { ProjectItem } from "../components";
import { customUseSelector, StoreDispatch } from "../redux";
import { deleted, statusToggled } from "../redux/features/projects";
import { IProjectDetails } from "../types";

export const ProjectList = memo(() => {
  const dispatch = useDispatch<StoreDispatch>();

  const {
    filter: { priorityFilters, statusFilter },
    project: { projects },
  } = customUseSelector((state) => state);

  const filterByStatus = useCallback(() => {
    return statusFilter === "completed"
      ? projects.filter((project) => project.completed)
      : statusFilter === "remaining"
      ? projects.filter((project) => !project.completed)
      : projects;
  }, [statusFilter, projects]);

  const filterByPriority = useCallback(() => {
    const todosFilteredByStatus = filterByStatus();

    return !priorityFilters.length
      ? todosFilteredByStatus
      : todosFilteredByStatus.filter((a) =>
          priorityFilters.includes(a.priority)
        );
  }, [filterByStatus, priorityFilters]);

  const toggleStatus = useCallback(
    (todoID: number, event: ChangeEvent<HTMLInputElement>) =>
      dispatch(
        statusToggled({
          id: todoID,
          completed: event.target.checked,
        })
      ),
    [dispatch]
  );

  const deleteTodo = useCallback(
    (todoID: number) => dispatch(deleted(todoID)),
    [dispatch]
  );

  return (
    <TodoListContainer>
      {filterByPriority().map((project: IProjectDetails) => (
        <ProjectItem
          key={project.id}
          handleStatusChange={toggleStatus}
          handleClick={deleteTodo}
          projectInfo={project}
        />
      ))}
    </TodoListContainer>
  );
});

const TodoListContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  height: 420px;
  overflow-x: auto;
  overflow-y: auto;
`;
