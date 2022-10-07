import styled from "styled-components";

interface IToolbarButton {
  text: string;
  onClick?(): void;
}

export const ToolbarButton = (props: IToolbarButton) => {
  const { text, onClick } = props;

  return <StyledToolbarButton onClick={onClick} children={text} />;
};

const StyledToolbarButton = styled.button`
  border: none;
  color: #fff;
  background-color: #764abc;
  padding: 5px;
  font-weight: medium;
  font-size: 14px;
`;
