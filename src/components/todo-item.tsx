import { ChangeEvent } from "react";
import styled from "styled-components";

import { SelectField } from "../common";
import { PriorityOptionLabels, PriorityOptionValues } from "../enums";

interface ITodoItem {
  todoName: string;
  todoID: number;
  handleStatusChange: (
    todoID: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleClick: (todoID: number) => void;
  handlePriorityChange: (
    todoID: number,
    event: ChangeEvent<HTMLSelectElement>
  ) => void;
  checked: boolean;
  priorityValue: string;
}

export const TodoItem = (props: ITodoItem) => {
  const {
    todoName,
    todoID,
    handleStatusChange,
    handleClick,
    handlePriorityChange,
    checked,
    priorityValue,
  } = props;

  const priorityOptions = [
    { label: PriorityOptionLabels.DEFAULT, value: "" },
    { label: PriorityOptionLabels.LOW, value: PriorityOptionValues.LOW },
    {
      label: PriorityOptionLabels.MODERATE,
      value: PriorityOptionValues.MODERATE,
    },
    { label: PriorityOptionLabels.HIGH, value: PriorityOptionValues.HIGH },
  ];

  return (
    <TodoItemWrapper>
      <CheckBox
        onChange={(event) => handleStatusChange(todoID, event)}
        type={"checkbox"}
        checked={checked}
      />
      <TodoName children={todoName} />
      <SelectField
        selectOptions={priorityOptions}
        onChange={(event) => handlePriorityChange(todoID, event)}
        value={priorityValue}
      />
      <DeleteButton children={"❌"} onClick={() => handleClick(todoID)} />
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  justify-content: space-around;
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
  width: 500px;
`;

const DeleteButton = styled.button`
  font-size: 20px;
  background-color: #fff;
  border: none;
  &&:hover {
    opacity: 0.5;
  }
`;
