import styled from "styled-components";

import { customUseSelector, StoreDispatch } from "../types";
import { TodoItem } from "../components/todo-item";
import { useDispatch } from "react-redux";
import { todosSlice } from "../features/todos/todos-slice";
import { ChangeEvent } from "react";

export const TodosList = () => {
  const todosArray = customUseSelector((state) => state.todo.todos);

  const dispatch = useDispatch<StoreDispatch>();

  const toggleStatus = (todoID: number) =>
    dispatch(todosSlice.actions.statusToggled(todoID));

  const deleteTodo = (todoID: number) =>
    dispatch(todosSlice.actions.deleted(todoID));

  const addPriority = (todoID: number, event: ChangeEvent<HTMLSelectElement>) =>
    dispatch(
      todosSlice.actions.priorityAdded({
        id: todoID,
        priority: event.target.value,
      })
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
        />
      ))}
    </TodosListWrapper>
  );
};

const TodosListWrapper = styled.div`
  padding: 0 0 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
`;
