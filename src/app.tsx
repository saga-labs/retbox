import React from "react";

// Supabase
import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";

// React Router
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// contexts
import useSessionStore from "./contexts/session-store";

// Components
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Rebuild from "./pages/rebuild";

const supabaseKey = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON;
const supabase = createClient(supabaseKey, supabaseAnon);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/rebuild",
    element: <Rebuild />,
  },
]);

export default function App() {
  const session = useSessionStore((state) => state.session);
  const setSession = useSessionStore((state) => state.setSession);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // get current auth session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setLoading(false);
      setSession(session);
    });

    // update state on auth change
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // useEffect clean-up function
    return () => subscription.unsubscribe();
  }, [setSession]);

  if (!session && !loading) {
    return <Login />; // todo: redirect to /auth and still register on change
  }

  return <RouterProvider router={router} />;
}
