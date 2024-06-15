import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// layout
import Layout from '.';

interface Props {
  component: React.ComponentType<any>;
}

export const AuthenticationGuard: React.FC<Props> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Layout>
        <p>loader</p>
      </Layout>
    ),
  });

  return <Component />;
};
