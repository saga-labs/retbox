import React from 'react';

import { supabase } from './utils/supabase';

// routing
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// contexts
// import useSessionStore from './contexts/use-session';

// pages
// import Dashboard from './pages/dashboard';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import TasksPage from './pages/tasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksPage/>,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  }
]);

function App() {
  // const session = useSessionStore((state) => state.session);
  // const setSession = useSessionStore((state) => state.setSession);
  const [, setLoading] = React.useState<boolean>(true);


  // if (!session && !loading) {
  //   return <Login/>; // todo: redirect to /auth and still register on change
  // }

  return <RouterProvider router={router} />;
}

export default App;
