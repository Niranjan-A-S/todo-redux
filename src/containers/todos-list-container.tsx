import { useCallback, ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { TodoItem } from "../components";
import { todosSlice } from "../redux/features/todos/todos-slice";
import { customUseSelector, StoreDispatch, ITodosDetails } from "../types";

export const TodosList = memo(() => {
  const completedStatus = customUseSelector(
    (state) => state.filter.statusFilter
  );

  const todosArray = customUseSelector((state) => state.todo.todos);
  debugger;

  const priorityFilters = customUseSelector(
    (state) => state.filter.priorityFilter
  );

  const filterTodosByStatus = useCallback(() => {
    switch (completedStatus) {
      case "completed":
        return todosArray.filter((todo) => todo.completed);
      case "remaining":
        return todosArray.filter((todo) => !todo.completed);
      default:
        return todosArray;
    }
  }, [completedStatus, todosArray]);

  const filteredArrayByStatus = filterTodosByStatus();

  const filterArrayByPriority = useCallback(() => {
    if (!priorityFilters.length) {
      return filteredArrayByStatus;
    }
    return filteredArrayByStatus.filter((a) =>
      priorityFilters.includes(a.priority)
    );
  }, [filteredArrayByStatus, priorityFilters]);

  const filteredArray = filterArrayByPriority();

  const dispatch = useDispatch<StoreDispatch>();

  const toggleStatus = useCallback(
    (todoID: number, event: ChangeEvent<HTMLInputElement>) =>
      dispatch(
        todosSlice.actions.statusToggled({
          id: todoID,
          completed: event.target.checked,
        })
      ),
    [dispatch]
  );

  const deleteTodo = useCallback(
    (todoID: number) => dispatch(todosSlice.actions.deleted(todoID)),
    [dispatch]
  );

  const addPriority = useCallback(
    (todoID: number, event: ChangeEvent<HTMLSelectElement>) =>
      dispatch(
        todosSlice.actions.priorityAdded({
          id: todoID,
          priority: event.target.value,
        })
      ),
    [dispatch]
  );

  return (
    <TodosListWrapper>
      {filteredArray.map((todo: ITodosDetails) => (
        <TodoItem
          key={todo.id}
          todoName={todo.name}
          toggleStatus={toggleStatus}
          todoID={todo.id}
          deleteTodo={deleteTodo}
          addPriority={addPriority}
          checked={todo.completed}
          priorityValue={todo.priority}
        />
      ))}
    </TodosListWrapper>
  );
});

const TodosListWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 350px;
  overflow-x: auto;
  overflow-y: auto;
`;
