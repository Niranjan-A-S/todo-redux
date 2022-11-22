import { useDispatch } from "react-redux";
import { useCallback, ChangeEvent } from "react";

import { StoreDispatch } from "./../redux/store";
import {
  clearCompleted,
  deleted,
  markCompleted,
  statusToggled,
} from "../redux/features/projects";
import {
  priorityFiltersAdded,
  priorityFiltersRemoved,
} from "../redux/features/filters";

export const useProjectActions = () => {
  const dispatch = useDispatch<StoreDispatch>();

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

  const handleSubmitMark = useCallback(() => {
    dispatch(markCompleted());
  }, [dispatch]);

  const handleSubmitClear = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  const filterByStatus = useCallback(
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

  return {
    toggleStatus,
    deleteTodo,
    togglePriority,
    filterByStatus,
    handleSubmitClear,
    handleSubmitMark,
  };
};
