import { memo } from "react";

import styled from "styled-components";
import { ProjectItem } from "../components";
import { useProjectActions, useProjectsState } from "../hooks";
import { IProjectDetails } from "../types";

export const ProjectList = memo(() => {
  const [filterByPriority] = useProjectsState();

  const { deleteTodo, toggleStatus } = useProjectActions();

  return (
    <ProjectsListContainer>
      {filterByPriority().map((project: IProjectDetails) => (
        <ProjectItem
          key={project.id}
          handleStatusChange={toggleStatus}
          handleClick={deleteTodo}
          projectInfo={project}
        />
      ))}
    </ProjectsListContainer>
  );
});

const ProjectsListContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  height: 430px;
  overflow-x: auto;
  overflow-y: auto;
`;
