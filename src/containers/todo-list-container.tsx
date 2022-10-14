import { useCallback, ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { TodoItem } from "../components";
import { todosSlice } from "../redux/features/todos/todos-slice";
import { customUseSelector, StoreDispatch, ITodosDetails } from "../types";

export const TodoList = memo(() => {
  const todosArray = customUseSelector((state) => state.todo.todos);

  const filters = customUseSelector((state) => state.filter);

  const { priorityFilters, statusFilter } = filters;

  // console.log(statusFilter);

  const filter = useCallback(
    (array: ITodosDetails[]) => {
      return array.reduce((acc: any, todo) => {
        return statusFilter === "remaining"
          ? [...acc, [...array.filter((todo) => !todo.completed)]]
          : statusFilter === "completed"
          ? [...acc, [...array.filter((todo) => todo.completed)]]
          : [...acc, todo];
      }, []);
    },
    [statusFilter]
  );

  const newArray = filter(todosArray);

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

  const deleteTodo = useCallback(
    (todoID: number) => dispatch(todosSlice.actions.deleted(todoID)),
    [dispatch]
  );

  return (
    <TodoListContainer>
      {newArray.map((todo: ITodosDetails) => (
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
    </TodoListContainer>
  );
});

const TodoListContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 350px;
  overflow-x: auto;
  overflow-y: auto;
`;
