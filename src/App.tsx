import React from "react";
import NewsPage from "./pages/NewsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/read/:id",
        element: <NewsPage />
      }
    ]
  }
])

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
