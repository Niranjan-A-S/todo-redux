import { useCallback } from "react";
import { customUseSelector } from "../redux";

export const useProjectsState = () => {
  const {
    filter: { priorityFilters, statusFilter },
    project: { projects },
  } = customUseSelector((state) => state);

  const filterByStatus = useCallback(
    () =>
      statusFilter === "completed"
        ? projects.filter((project) => project.completed)
        : statusFilter === "remaining"
        ? projects.filter((project) => !project.completed)
        : projects,
    [statusFilter, projects]
  );

  const filterByPriority = useCallback(() => {
    const todosFilteredByStatus = filterByStatus();

    return !priorityFilters.length
      ? todosFilteredByStatus
      : todosFilteredByStatus.filter((a) =>
          priorityFilters.includes(a.priority)
        );
  }, [filterByStatus, priorityFilters]);

  return [filterByPriority];
};
