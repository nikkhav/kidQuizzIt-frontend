import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./store/Reducer";
import { ThemeProvider, createTheme } from "@mui/material";

const colors = ["#98CBEB", "#8F3945", "#EF7B45", "#6EB257", "#1d1d1b", "#fff"];
const errorColors = ["#FF0000", "#DC143C", "#FFA500", "#800000"];
const warningColors = ["#FFFF00", "#FFD700", "#FFC107", "#FFA500"];
const successColors = ["#00FF00", "#008000", "#50C878", "#008080", "#008489"];

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: colors[0],
      contrastText: colors[5],
    },
    secondary: {
      main: colors[1],
      contrastText: colors[4],
    },
    error: {
      main: errorColors[0],
      contrastText: colors[5],
    },
    warning: {
      main: warningColors[0],
      contrastText: colors[5],
    },
    success: {
      main: successColors[0],
      contrastText: colors[5],
    },
  },
});

const store = legacy_createStore(reducer);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ThemeProvider>
);
