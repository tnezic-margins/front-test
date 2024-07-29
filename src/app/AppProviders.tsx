import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { AppRoutes } from "./routes";

export const AppProviders = () => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </ReduxProvider>
  );
};
