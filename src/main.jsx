import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './providers/AuthProviders';
import ErrorComponent from './components/ErrorComponent';
import Learn from './pages/Learn';
import Tutorials from './pages/Tutorials';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/learn',
        loader: ()=> fetch('../public/language.json'),
        element: <Learn></Learn>
      },
      {
        path: '/tutorials',
        element: <Tutorials></Tutorials>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
