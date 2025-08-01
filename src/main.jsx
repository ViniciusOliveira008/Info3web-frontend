import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './Cadastro.jsx'
import Login from './Login.jsx'
import SidebarTest from './sidebarTest.jsx'
import Perfil from './Perfil.jsx'


const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/cadastro",
            element:<Cadastro/>
        },
        {
            path:"/home",
            element:<SidebarTest/>
        },
        {
            path:"/galeria",
            element:<SidebarTest/>
        },
        {
            path:"/turma",
            element:<SidebarTest/>
        },
        {
            path:"/perfil",
            element:<Perfil/>
        },
    ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } /> 
  </StrictMode>,
)
