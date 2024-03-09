import React from 'react';

// routing
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard';
import Login from './pages/auth-login';
import Register from './pages/auth-register';

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
  // const session = useSessionStore((state) => state.session);
  // const setSession = useSessionStore((state) => state.setSession);
  // const [loading, setLoading] = React.useState<boolean>(true);

  // React.useEffect(() => {
  //   // get current auth session
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setLoading(false);
  //     setSession(session);
  //   });

  //   // update state on auth change
  //   const { data: { subscription }} = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //     setSession(session);
  //   });

  //   // useEffect clean-up function
  //   return () => subscription.unsubscribe();
  // }, [setSession]);

  // if (!session && !loading) {
  //   return <Login/>; // todo: redirect to /auth and still register on change
  // }

  return <RouterProvider router={router} />;
}

export default App;
