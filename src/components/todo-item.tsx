import { ChangeEvent } from "react";
import styled from "styled-components";
import { SelectField } from "../common";

interface ITodoItem {
  todoName: string;
  todoID: number;
  toggleStatus: (todoID: number) => void;
  deleteTodo: (todoID: number) => void;
  addPriority: (todoID: number, event: ChangeEvent<HTMLSelectElement>) => void;
}

export const TodoItem = (props: ITodoItem) => {
  const { todoName, todoID, toggleStatus, deleteTodo, addPriority } = props;

  const priorityOptions = [
    { label: "Choose Priority", value: "" },
    { label: "Low", value: "low" },
    { label: "Moderate", value: "moderate" },
    { label: "High", value: "high" },
  ];

  return (
    <TodoItemWrapper>
      <CheckBox onChange={() => toggleStatus(todoID)} type={"checkbox"} />
      <TodoName children={todoName} />
      <SelectField
        selectOptions={priorityOptions}
        onChange={(event) => addPriority(todoID, event)}
      />
      <DeleteButton children={"❌"} onClick={() => deleteTodo(todoID)} />
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const CheckBox = styled.input`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 30px;
  width: 30px;
`;

const TodoName = styled.p`
  font-size: 25px;
  font-weight: lighter;
  width: 600px;
`;

const DeleteButton = styled.button`
  justify-items: flex-end;
  width: 50px;
  font-size: 20px;
  background-color: #fff;
  border: none;
  &&:hover {
    opacity: 0.5;
  }
`;
