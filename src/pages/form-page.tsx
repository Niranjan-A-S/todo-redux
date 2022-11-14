import styled from "styled-components";
import { ProjectForm } from "../components";

export const FormPage = () => {
  return (
    <FormWrapper>
      <FormTitle>project details</FormTitle>
      <ProjectForm />
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 200px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const FormTitle = styled.h1`
  color: #764abc;
  text-transform: capitalize;
  text-align: center;
`;
