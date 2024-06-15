import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// unauthenticated
import Login from './pages/auth/login';
import Register from './pages/auth/register';

// authenticated
import Tasks from './pages/tasks';
import Projects from './pages/projects';
import ProjectsDetail from './pages/projects-detail';
import Teams from './pages/teams';
import Agents from './pages/agents';
import Settings from './pages/settings';
import { AuthenticationGuard } from './components/layout/auth-guard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticationGuard component={Projects} />,
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
    path: "*",
    element: <>Gone</>
  }
]);

// Main App component
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <>loading...</>

  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
