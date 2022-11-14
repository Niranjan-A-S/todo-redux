import { ChangeEvent } from "react";
import styled from "styled-components";
import { IProjectDetails } from "../types";

interface IProjectItem {
  projectInfo: IProjectDetails;
  handleStatusChange: (
    projectID: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleClick: (projectID: number) => void;
}

export const ProjectItem = (props: IProjectItem) => {
  const {
    handleStatusChange,
    handleClick,
    projectInfo: { completed, id, priority, projectName },
  } = props;

  return (
    <ProjectItemWrapper>
      <CheckBox
        onChange={(event) => handleStatusChange(id, event)}
        type={"checkbox"}
        checked={completed}
      />
      <ProjectName children={projectName} />
      <ProjectPriority children={priority} />
      {/* have to fix the color thing  */}
      <EditButton children={"✏️"} />
      <DeleteButton children={"❌"} onClick={() => handleClick(id)} />
    </ProjectItemWrapper>
  );
};

const ProjectItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 8fr 2fr repeat(2, 1fr);
  padding: 10px;
  grid-column-gap: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const CheckBox = styled.input`
  height: 30px;
  width: 30px;
`;

const ProjectName = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-transform: capitalize;
`;

const ProjectPriority = styled.span`
  font-size: 25px;
  text-transform: capitalize;
  text-align: center;
`;

const EditButton = styled.button`
  font-size: 20px;
  background-color: #fff;
  border: none;
  &&:hover {
    opacity: 0.5;
  }
`;

const DeleteButton = styled.button`
  font-size: 20px;
  background-color: #fff;
  border: none;
  &&:hover {
    opacity: 0.5;
  }
`;
