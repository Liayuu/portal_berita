import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import Root from "../pages/Root";
import SearchPage from "../pages/SearchPage";
import NotFound from "../pages/NotFound";

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
          path:"/search",
          element: <SearchPage />
        },
        {
          path: "/read/:newsId",
          element: <NewsPage />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])