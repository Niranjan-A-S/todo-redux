import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PriorityOptionLabels, PriorityOptionValues } from "../enums";
import { StoreDispatch } from "../redux";
import { added } from "../redux/features/projects";
import { IProjectFormData } from "../types";

const priorityOptions = [
  { label: PriorityOptionLabels.LOW, value: PriorityOptionValues.LOW },
  {
    label: PriorityOptionLabels.MODERATE,
    value: PriorityOptionValues.MODERATE,
  },
  { label: PriorityOptionLabels.HIGH, value: PriorityOptionValues.HIGH },
];

export const ProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<StoreDispatch>();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IProjectFormData>({});

  const submitData: SubmitHandler<IProjectFormData> = ({
    projectName,
    priority,
  }) => {
    navigate("/projects");
    dispatch(added({ projectName, priority }));
  };

  const clearFields = () => {};

  return (
    <StyledForm onSubmit={handleSubmit(submitData)}>
      <ProjectNameField
        type={"text"}
        {...register("projectName")}
        placeholder="Enter Project Name"
      />
      <SelectPriority {...register("priority")}>
        {priorityOptions.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </SelectPriority>
      <FormButton type="button" onClick={clearFields}>
        clear
      </FormButton>
      <FormButton type="submit">submit</FormButton>
    </StyledForm>
  );
};

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

const SelectPriority = styled.select`
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
