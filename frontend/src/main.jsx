import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./navigation/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import MovieDetailPage from "./pages/MovieDetailPage.jsx";

const browserRoutes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies/:moviehref",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browserRoutes}></RouterProvider>
  </React.StrictMode>
);
