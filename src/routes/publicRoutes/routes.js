import HomeProvider from "../../Context/HomeProvider";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Places from "../../pages/Home/Places";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("https://travel-buddy-server.vercel.app/places");
        },
        element: (
          <HomeProvider>
            <Home></Home>
          </HomeProvider>
        ),
        children: [
          {
            path: "/",
            element: <Places></Places>,
          },
        ],
      },
    ],
  },
]);
