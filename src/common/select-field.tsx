import { ChangeEvent } from "react";
import { IOption } from "../types";

interface ISelectOptions {
  selectOptions: Array<IOption>;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

export const SelectField = (props: ISelectOptions) => {
  const { selectOptions, onChange, value } = props;

  return (
    <select value={value} onChange={onChange}>
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
