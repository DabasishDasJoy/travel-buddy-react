import HomeProvider from "../../Context/HomeProvider";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Home/RightSide/Booking";
import Places from "../../pages/Home/RightSide/Places";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Hotels from "../../pages/Search/Hotels";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return fetch("https://travel-buddy-server.vercel.app/places");
    },
    element: (
      <HomeProvider>
        <Root></Root>
      </HomeProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Places></Places>,
          },
          {
            path: "/booking",
            element: <Booking></Booking>,
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/search/:id",
        loader: ({ params }) => {
          return fetch(
            `https://travel-buddy-server.vercel.app/places/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <Hotels></Hotels>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
