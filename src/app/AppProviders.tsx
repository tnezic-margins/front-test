import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./store";
import { AppRoutes } from "./routes";
import { PersistGate } from "redux-persist/integration/react";

export const AppProviders = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppRoutes />
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
};
