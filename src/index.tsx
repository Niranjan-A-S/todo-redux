import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { TodosPage } from "./pages";
import { store } from "./reducers/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <TodosPage />
  </Provider>
);
