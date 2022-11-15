import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ProjectList, Toolbar } from ".";
import { Header } from "../components";

export const ProjectsContainer = () => {
  return (
    <Wrapper>
      <Header />
      <ProjectList />
      <Toolbar />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 650px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 50px auto;
  padding: 20px;
`;
