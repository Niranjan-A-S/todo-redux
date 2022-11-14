import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { FormPage, TodosPage } from "./pages";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/entry-form"} />}>
            <Route path="entry-form" element={<FormPage />} />
            <Route path="todos" element={<TodosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
