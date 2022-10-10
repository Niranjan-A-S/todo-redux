import { ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { customUseSelector, StoreDispatch } from "../types";
import { TodoItem } from "../components/todo-item";
import { todosSlice } from "../redux/features/todos/todos-slice";
import { useCallback } from "react";

export const TodosList = memo(() => {
  const todosArray = customUseSelector((state) => state.todo.todos);

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
      {todosArray.map((todo) => (
        <TodoItem
          key={todo.id}
          todoName={todo.name}
          toggleStatus={toggleStatus}
          todoID={todo.id}
          deleteTodo={deleteTodo}
          addPriority={addPriority}
          checked={todo.completed}
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
