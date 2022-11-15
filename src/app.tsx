import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProjectForm } from "./components";
import { ProjectsPage } from "./pages";

import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"projects"} />} />
          <Route path="projects" element={<ProjectsPage />}>
            <Route path="form" element={<ProjectForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
