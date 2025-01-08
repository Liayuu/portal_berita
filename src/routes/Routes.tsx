import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import Root from "../pages/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/read/:newsId",
          element: <NewsPage />
        }
      ]
    }
  ])