import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Store from "./store/store";
import NotificationStore from "./store/notificationStore";

interface State {
  store: Store;
  notificationStore: NotificationStore;
}

export const Context = createContext<State>({
  store: new Store(),
  notificationStore: new NotificationStore(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = new Store();
const notificationStore = new NotificationStore();

root.render(
  <Context.Provider value={{ store, notificationStore }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Context.Provider>
);
