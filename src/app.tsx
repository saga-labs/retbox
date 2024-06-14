import React from 'react';

// routing
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// contexts
// import useSessionStore from './contexts/use-session';

// authenticated
import TasksPage from './pages/tasks';
import Projects from './pages/projects';
import Teams from './pages/teams';
import Agents from './pages/agents';
import Settings from './pages/settings';

// unauthenticated
import Login from './pages/auth/login';
import Register from './pages/auth/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TasksPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/teams',
    element: <Teams />,
  },
  {
    path: '/agents',
    element: <Agents />,
  },
  {
    path: '/settings',
    element: <Settings/>
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
  // const session = useSessionStore((state) => state.session);
  // const setSession = useSessionStore((state) => state.setSession);
  const [loading, ] = React.useState<boolean>(false);

  // if (!session && !loading) {
  //   return <Login/>; // todo: redirect to /auth and still register on change
  // }

  if (loading) return <p>loading</p>

  return <RouterProvider router={router} />;
}

export default App;
