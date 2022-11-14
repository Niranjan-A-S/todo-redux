import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ProjectList, Toolbar } from ".";

export const ProjectsContainer = () => {
  return (
    <Wrapper>
      <Header>
        <Heading>Explore Your Projects...</Heading>
        <AddButton>Add New Project +</AddButton>
      </Header>
      <ProjectList />
      <Toolbar />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 650px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 50px auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
`;

const ProjectsContainerWrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16500px;
`;

const Heading = styled.h1`
  color: #764abc;
  padding: 5pxs;
`;

const AddButton = styled.button`
  border: none;
  font-size: 15px;
  background: #764abc;
  color: #fff;
  grid-column: 2/4;
  padding: 5px 0;
`;
