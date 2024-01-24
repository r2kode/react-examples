import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import ErrorBoundaries from "./features/ErrorBoundries";
import "./index.css";
import Recurrence from "./features/Recurrence";
import Home from "./features/Home";
import DallE from "./features/DallE";
import { DataStructures } from "./features/DataStructures";
import { Editor } from "./features/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Home />, index: true },
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
      {
        path: "editor",
        element: <Editor />,
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
