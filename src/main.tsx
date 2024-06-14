import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="cerebase.eu.auth0.com"
      clientId="0XTzUp8c4QR1SKH9rF9pgxSrRcIEc0ps"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);
