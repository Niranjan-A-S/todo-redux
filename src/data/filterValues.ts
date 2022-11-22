import {
  PriorityOptionColors,
  PriorityOptionLabels,
  PriorityOptionValues,
  StatusOptionLabels,
  StatusOptionValues,
} from "./enums";

export const priorityFilters = [
  {
    id: 1,
    label: PriorityOptionLabels.LOW,
    color: PriorityOptionColors.LOW,
    value: PriorityOptionValues.LOW,
  },
  {
    id: 2,
    label: PriorityOptionLabels.MODERATE,
    color: PriorityOptionColors.MODERATE,
    value: PriorityOptionValues.MODERATE,
  },
  {
    id: 3,
    label: PriorityOptionLabels.HIGH,
    color: PriorityOptionColors.HIGH,
    value: PriorityOptionValues.HIGH,
  },
];

export const statusFilters = [
  { label: StatusOptionLabels.ALL, value: StatusOptionValues.ALL },
  {
    label: StatusOptionLabels.REMAINING,
    value: StatusOptionValues.REMAINING,
  },
  {
    label: StatusOptionLabels.COMPLETED,
    value: StatusOptionValues.COMPLETED,
  },
];
