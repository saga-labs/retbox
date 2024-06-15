import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// components
import { AuthenticationGuard } from './components/layout/auth-guard';

// unauthenticated
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Loading from './pages/static/loading';

// authenticated
import Tasks from './pages/tasks';
import Projects from './pages/projects';
import ProjectsDetail from './pages/projects-detail';
import Teams from './pages/teams';
import Agents from './pages/agents';
import Settings from './pages/settings';
import NotFound from './pages/static/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticationGuard component={Tasks} />,
  },
  {
    path: '/projects',
    element: <AuthenticationGuard component={Projects} />,
  },
  {
    path: '/projects/:id',
    element: <AuthenticationGuard component={ProjectsDetail} />,
  },
  {
    path: '/projects/:pid/epic/:eid',
    element: <AuthenticationGuard component={Tasks} />,
  },
  {
    path: '/teams',
    element: <AuthenticationGuard component={Teams} />,
  },
  {
    path: '/agents',
    element: <AuthenticationGuard component={Agents} />,
  },
  {
    path: '/settings',
    element: <AuthenticationGuard component={Settings} />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
]);

// Main App component
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
