import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { TodoList, Toolbar } from ".";

import { InputField } from "../components";
import { TITLE } from "../enums";
import { StoreDispatch } from "../redux";
import { added } from "../redux/features/todos";

export const TodosContainer = () => {
  const dispatch = useDispatch<StoreDispatch>();

  const [todoName, setTodoName] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTodoName(event.target.value);

  const handleKeyDown = useCallback(
    (event: { key: string }) => {
      todoName &&
        event.key === "Enter" &&
        dispatch(added(todoName)) &&
        setTodoName("");
    },
    [dispatch, todoName]
  );

  return (
    <>
      <Title children={TITLE} />
      <TodosContainerStyled>
        <InputField
          value={todoName}
          onChange={handleNameChange}
          onKeyDown={handleKeyDown}
        />
        <TodoList />
        <Toolbar />
      </TodosContainerStyled>
    </>
  );
};

const TodosContainerStyled = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 50%;
  position: absolute;
  top: 150px;
  left: 25%;
`;

const Title = styled.h1`
  background-color: #764abc;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 40px;
`;
