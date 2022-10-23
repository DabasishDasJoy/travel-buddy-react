import Root from "../../layouts/Root";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);
