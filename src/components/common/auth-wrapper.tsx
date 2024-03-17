import React from 'react';

import { supabase } from '@/utils/supabase';

// routing
import { Navigate } from 'react-router-dom';

// contexts
import useSessionStore from '@/contexts/use-session';

interface Props {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<Props> = ({ children }) => {
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
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};
