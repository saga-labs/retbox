import React from 'react';

// routing
import { Navigate } from 'react-router-dom';

// contexts
import useSessionStore from '@/contexts/use-session';

interface Props {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const session = useSessionStore((state) => state.session);
  // const setSession = useSessionStore((state) => state.setSession);
  const [loading] = React.useState<boolean>(true);

  if (!session && !loading) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};
