import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { FormPage, ProjectsPage } from "./pages";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"projects-form"} />} />
          <Route path="projects-form" element={<FormPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
