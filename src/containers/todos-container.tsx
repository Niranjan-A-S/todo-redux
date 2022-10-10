import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { StoreDispatch } from "../types";
import { InputField } from "../components";
import { TodosList } from "./todos-list-container";
import { ToolbarContainer } from "./toolbar-container";
import { todosSlice } from "../redux/features/todos/todos-slice";

export const TodosContainer = () => {
  const [todoName, setTodoName] = useState<string>("");

  const dispatch = useDispatch<StoreDispatch>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTodoName(event.target.value);

  const addProject = useCallback(
    (event: { key: string }) => {
      todoName &&
        event.key === "Enter" &&
        dispatch(todosSlice.actions.added(todoName)) &&
        setTodoName("");
    },
    [dispatch, todoName]
  );

  return (
    <>
      <Title children={"Things to be done..."} />
      <TodosContainerStyled>
        <InputField
          value={todoName}
          onChange={handleChange}
          onKeyDown={addProject}
        />
        <TodosList />
        <ToolbarContainer />
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
