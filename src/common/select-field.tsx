import { ChangeEventHandler } from "react";
import { IOption } from "../types";

interface ISelectOptions {
  selectOptions: Array<IOption>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectField = (props: ISelectOptions) => {
  const { selectOptions, onChange } = props;

  return (
    <select defaultValue={selectOptions[0].value} onChange={onChange}>
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
