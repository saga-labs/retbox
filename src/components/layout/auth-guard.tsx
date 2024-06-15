import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// loading
import Loading from '@/pages/static/loading';

interface Props {
  component: React.ComponentType<unknown>;
}

export const AuthenticationGuard: React.FC<Props> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });

  return <Component />;
};
