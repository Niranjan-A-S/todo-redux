import { TypedUseSelectorHook, useSelector } from "react-redux";

import { store } from "./reducers/store";

export interface ITodosInitialState {
  todos: Array<ITodosDetails>;
}

export interface ITodosDetails {
  id: number;
  name: string;
  completed: boolean;
}

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;
