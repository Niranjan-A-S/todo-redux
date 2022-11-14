import styled from "styled-components";

import { SelectField } from "../common";
import { PriorityOptionLabels, PriorityOptionValues } from "../enums";

const priorityOptions = [
  { label: PriorityOptionLabels.DEFAULT, value: "" },
  { label: PriorityOptionLabels.LOW, value: PriorityOptionValues.LOW },
  {
    label: PriorityOptionLabels.MODERATE,
    value: PriorityOptionValues.MODERATE,
  },
  { label: PriorityOptionLabels.HIGH, value: PriorityOptionValues.HIGH },
];

export const ProjectForm = () => (
  <StyledForm>
    <ProjectNameField placeholder="Enter Project Name" />
    <SelectPriority selectOptions={priorityOptions} />
    <FormButton>clear</FormButton>
    <FormButton>submit</FormButton>
  </StyledForm>
);

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const ProjectNameField = styled.input<{}>`
  grid-column: 1/3;
  font-size: 16px;
  padding: 10px;
`;

const SelectPriority = styled(SelectField)`
  grid-column: 1/3;
  font-size: 16px;
  padding: 10px;
`;

const FormButton = styled.button`
  background: #764abc;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
`;
