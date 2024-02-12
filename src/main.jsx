import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './pages/Login'

import NoMatch from './pages/NoMatch'

import './estilos/Dashboard.css'
import './estilos/Inicio.css'
import './estilos/Loader.css'
import './estilos/Dialog.css'
import DashboardAdmin from './pages/Dashboard/admin/DashboardAdmin'
import DashboardUser from './pages/Dashboard/user/DashboardUser'
import Calendario from './pages/Dashboard/admin/Calendario'
import PanelNotas from './pages/Dashboard/user/PanelNotas'


import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/inicio",
    element: <DashboardAdmin />,
  },
  {
    path: "/user",
    element: <DashboardUser />,
  },
  {
    path: "/notas",
    element: <PanelNotas />,
  },
  {
    path: "*",
    element: <NoMatch />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)