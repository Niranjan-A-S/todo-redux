import { ChangeEventHandler } from "react";

interface ISelectOptions {
  selectOptions: Array<IOption>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export interface IOption {
  label: string;
  value: string;
}

export const SelectField = (props: ISelectOptions) => {
  const { selectOptions, onChange } = props;

  return (
    <select onChange={onChange}>
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
