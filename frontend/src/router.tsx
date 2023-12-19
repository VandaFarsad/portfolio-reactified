import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ImpressumScreen from "./screens/ImpressumScreen";
import MainScreen from "./screens/MainScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainScreen />,
      },
      {
        path: "impressum",
        element: <ImpressumScreen />,
      },
    ],
  },
]);
