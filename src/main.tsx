import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import ErrorBoundaries from "./routes/error-boundaries";
import "./index.css";
import Recurrence from "./routes/recurrence";
import Main from "./components/Main";
import DallE from "./components/DallE";
import { DataStructures } from "./components/DataStructures";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Main />, index: true },
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
      {
        path: "dall-e",
        element: <DallE />,
        errorElement: <ErrorPage />,
      },
      {
        path: "data-structures",
        element: <DataStructures />,
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
