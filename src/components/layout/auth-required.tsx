import React from 'react';

// hooks
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
  children: React.ReactNode;
}

export const AuthRequired: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) return <Navigate to="/auth/login" replace/>;
  return <>{children}</>;
};
