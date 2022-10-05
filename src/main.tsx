import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import ErrorBoundaries from "./routes/error-boundaries";
import "./index.css";
import Recurrence from "./routes/recurrence";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "error-boundaries",
        element: <ErrorBoundaries />,
        errorElement: <ErrorPage />,
      },
      {
        path: "recurrence",
        element: <Recurrence />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
