import { ChangeEventHandler, KeyboardEventHandler } from "react";
import styled from "styled-components";

interface IInputField {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}

export const InputField = (props: IInputField) => {
  const { value, onChange, onKeyDown } = props;

  return (
    <StyledInputField
      autoFocus={true}
      type={"text"}
      placeholder={"Add your todos..."}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength={35}
    />
  );
};

const StyledInputField = styled.input`
  width: 100%;
  border: none;
  padding: 20px;
  font-size: 25px;
  &&:focus {
    outline: none;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
