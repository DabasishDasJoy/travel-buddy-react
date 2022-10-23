import HomeProvider from "../../Context/HomeProvider";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Home/RightSide/Booking";
import Places from "../../pages/Home/RightSide/Places";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

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
    ],
  },
]);
