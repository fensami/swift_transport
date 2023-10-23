import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/homePage/home/Home";
import SwiftTransfort from "../pages/SwiftTransfortPages/SwiftTransfort";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path: '/',
      element: <Home></Home>
    },
  {
    path: '/SwiftTransfort',
    element: <SwiftTransfort></SwiftTransfort>
  }]
  },
]);

export default router;