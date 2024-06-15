import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './index.css';

// auth0
import { Auth0Provider } from '@auth0/auth0-react';

// load environment variables
const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_CLIENT = import.meta.env.VITE_AUTH0_CLIENT;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);
