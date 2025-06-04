import {
  createBrowserRouter,

} from "react-router";
import Homelayout from "../layouts/Homelayout";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Homelayout
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/**",
    element: <div>Error 404</div>,
  },
]);


export default router