import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();

  const displayForm = () => navigate("form");

  return (
    <HeaderWrapper>
      <Heading>Explore Your Projects...</Heading>
      <AddButton onClick={displayForm}>Add New Project +</AddButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const Heading = styled.h1`
  color: #764abc;
  padding: 5px;
`;

const AddButton = styled.button`
  border: none;
  font-size: 20px;
  background: #764abc;
  color: #fff;
  padding: 5px;
`;
