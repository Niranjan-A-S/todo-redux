export interface IProjectsInitialState {
  projects: Array<IProjectDetails>;
}

export interface IProjectDetails {
  id: number;
  projectName: string;
  completed: boolean;
  priority: string;
}

export interface IProjectFormData {
  projectName: string;
  priority: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface IFiltersInitialState {
  statusFilter: string;
  priorityFilters: Array<string>;
}
