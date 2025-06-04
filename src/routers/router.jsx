import {
  createBrowserRouter,

} from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../pages/Home";
import Categori from "../pages/Categori";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Homelayout,
    children:[
        {path: "" , Component: Home},
        {path: "/catagori/:id" ,
         Component: Categori , loader:() => fetch("/news.json")   },
        
    ]
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
    path: "/*",
    element: <div>Error 404</div>,
  },
]);


export default router