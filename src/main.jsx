import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routers/router.jsx'
import { Authcontext } from './provider/Authprovider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <RouterProvider router={router}></RouterProvider>
    </Authcontext>
  </StrictMode>,
)
