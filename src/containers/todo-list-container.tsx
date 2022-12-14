import { useCallback, ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TodoItem } from "../components";
import { customUseSelector, StoreDispatch } from "../redux";

import { deleted, priorityAdded, statusToggled } from "../redux/features/todos";
import { ITodosDetails } from "../types";

export const TodoList = memo(() => {
  const dispatch = useDispatch<StoreDispatch>();
  const state = customUseSelector((state) => state);

  const {
    filter: { priorityFilters, statusFilter },
    todo: { todos },
  } = state;

  const filterByStatus = useCallback(() => {
    return statusFilter === "completed"
      ? todos.filter((todo) => todo.completed)
      : statusFilter === "remaining"
      ? todos.filter((todo) => !todo.completed)
      : todos;
  }, [statusFilter, todos]);

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

  const addPriority = useCallback(
    (todoID: number, event: ChangeEvent<HTMLSelectElement>) =>
      dispatch(
        priorityAdded({
          id: todoID,
          priority: event.target.value,
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
      {filterByPriority().map((todo: ITodosDetails) => (
        <TodoItem
          key={todo.id}
          todoID={todo.id}
          todoName={todo.name}
          handleStatusChange={toggleStatus}
          handlePriorityChange={addPriority}
          handleClick={deleteTodo}
          checked={todo.completed}
          priorityValue={todo.priority}
        />
      ))}
    </TodoListContainer>
  );
});

const TodoListContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 350px;
  overflow-x: auto;
  overflow-y: auto;
`;
