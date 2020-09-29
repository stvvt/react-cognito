import React, { useContext, useEffect, useState } from 'react';
import { User, UserManager, WebStorageStateStore } from 'oidc-client';
import config from './config';

const userManager = new UserManager({
  redirect_uri: `${config.origin}/callback`,
  scope: 'email openid profile',
  silent_redirect_uri: `${config.origin}/silent_callback`,
  // popup_redirect_uri: `${config.origin}/authentication/popup_callback`,
  automaticSilentRenew: true,
  loadUserInfo: true,
  post_logout_redirect_uri: config.origin,
  // response_type: 'id_token token',
  response_type: 'code',
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  client_id: config.clientId,
  authority: config.authority,
  metadata: {
    "authorization_endpoint": `${config.authority}/oauth2/authorize`,
    "id_token_signing_alg_values_supported": ["RS256"],
    "issuer": `https://cognito-idp.eu-central-1.amazonaws.com/${config.userPoolId}`,
    "jwks_uri": `https://cognito-idp.eu-central-1.amazonaws.com/${config.userPoolId}/.well-known/jwks.json`,
    "response_types_supported": ["code", "token"],
    "scopes_supported": ["openid", "email", "phone", "profile"],
    "subject_types_supported": ["public"],
    "token_endpoint": `${config.authority}/oauth2/token`,
    "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post"],
    "userinfo_endpoint": `${config.authority}/oauth2/userInfo`,
    "end_session_endpoint": `${config.authority}/logout?client_id=${config.clientId}&logout_uri=${config.origin}/logout`,
  },
});

interface AuthContextProps {
  userManager: UserManager;
  user?: User | null;
}

export const AuthContext = React.createContext<AuthContextProps>({
  userManager,
});

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const lastPathPart = pathParts[pathParts.length - 1];
    (async () => {
      switch (lastPathPart) {
        case 'callback':
          await userManager.signinRedirectCallback();
          window.location.replace(config.origin);
          return;
        case 'silent_callback':
          await userManager.signinSilentCallback();
          return;
        case 'logout':
          await userManager.signoutRedirectCallback();
          window.location.replace(config.origin);
          return;
      }
      const u = await userManager.getUser();
      setUser(u);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ userManager, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;