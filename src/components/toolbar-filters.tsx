import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import { IOption, SelectField } from "../common";

interface IToolbarFilters {
  filterCriterion: string;
  filterOptions: Array<IOption>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const ToolbarFilters = (props: IToolbarFilters) => {
  const { filterCriterion, filterOptions, onChange } = props;

  return (
    <ToolbarFilterWrapper>
      <strong>{filterCriterion}</strong>
      <SelectField selectOptions={filterOptions} onChange={onChange} />
    </ToolbarFilterWrapper>
  );
};

const ToolbarFilterWrapper = styled.div`
  width: 125px;
`;
