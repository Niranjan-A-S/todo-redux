import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Explore Your Projects...</Heading>
      <Link to="form">
        <AddButton>Add New Project +</AddButton>
      </Link>
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
