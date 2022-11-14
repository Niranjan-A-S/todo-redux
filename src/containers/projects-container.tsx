import styled from "styled-components";
import { ProjectList, Toolbar } from ".";

import { TITLE } from "../enums";

export const TodosContainer = () => {
  return (
    <>
      <Title children={TITLE} />
      <ProjectsContainerWrapper>
        <ProjectList />
        <Toolbar />
      </ProjectsContainerWrapper>
    </>
  );
};

const Title = styled.h1`
  background-color: #764abc;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 40px;
`;

const ProjectsContainerWrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 50%;
  margin: 20px auto;
`;
