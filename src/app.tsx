// import React from 'react';

// import { supabase } from './utils/supabase';

// routing
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// contexts
// import useSessionStore from './contexts/use-session';

// pages
import Dashboard from './pages/dashboard';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
