import {
  createBrowserRouter,

} from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../pages/Home";
import Categori from "../pages/Categori";
import Login from "../components/Login";
import Reagister from "../components/Reagister";
import AuthLaut from "../layouts/AuthLaut";
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
    path: "/auth",
    Component:AuthLaut,
    children:[
      { path:"/auth/login" , Component:Login},
      { path:"/auth/registation" , Component:Reagister}
    ]
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