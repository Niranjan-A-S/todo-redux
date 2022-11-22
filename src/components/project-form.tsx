import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PriorityOptionLabels, PriorityOptionValues } from "../data";
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
    formState: { errors },
  } = useForm<IProjectFormData>({
    defaultValues: { projectName: "", priority: "" },
  });

  const submitData: SubmitHandler<IProjectFormData> = ({
    priority,
    projectName,
  }) => {
    navigate("/projects");
    dispatch(added({ projectName, priority }));
  };

  const clearFields = () => navigate(-1);

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(submitData)}>
        <FieldSection>
          <label>Project Name:</label>
          <ProjectNameField
            {...register("projectName", {
              required: "Project name is required",
              minLength: {
                value: 5,
                message: "Project name should be more than 4 characters",
              },
              maxLength: {
                value: 30,
                message: "Project name should not be more than 30 characters",
              },
            })}
          />
          {errors.projectName && <sup>{errors.projectName.message}</sup>}
        </FieldSection>

        <FieldSection>
          <label>Priority:</label>
          <SelectPriority {...register("priority")}>
            {priorityOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </SelectPriority>
        </FieldSection>

        <FormButton type="button" onClick={clearFields}>
          cancel
        </FormButton>
        <FormButton type="submit">submit</FormButton>
      </StyledForm>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  background: #fff;
  width: 400px;
  padding: 10px;
  margin: 250px auto;
`;

const FieldSection = styled.section`
  grid-column: 1/3;
  display: grid;
  grid-row-gap: 5px;
`;

const ProjectNameField = styled.input`
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
