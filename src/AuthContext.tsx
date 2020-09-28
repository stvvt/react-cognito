import React, { useContext, useEffect, useState } from 'react';
import { User, UserManager, WebStorageStateStore } from 'oidc-client';

interface AuthContextProps {
  userManager: UserManager;
  user?: User | null;
}

const origin = window.location.origin;
const authority = 'https://reactapp.auth.eu-central-1.amazoncognito.com';
const client_id = '7s7uifbd9p5rds9van1dtv6hmo';
const userManager = new UserManager({
  redirect_uri: `${origin}/callback`,
  scope: 'email openid profile',
  silent_redirect_uri: `${origin}/silent_callback`,
  // popup_redirect_uri: `${origin}/authentication/popup_callback`,
  automaticSilentRenew: true,
  loadUserInfo: true,
  post_logout_redirect_uri: `${origin}`,
  // response_type: 'id_token token',
  response_type: 'code',
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  client_id,
  authority,
  metadata: {
    "authorization_endpoint": "https://reactapp.auth.eu-central-1.amazoncognito.com/oauth2/authorize",
    "id_token_signing_alg_values_supported": ["RS256"],
    "issuer": "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_uv19uFqzy",
    "jwks_uri": "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_uv19uFqzy/.well-known/jwks.json",
    "response_types_supported": ["code", "token"],
    "scopes_supported": ["openid", "email", "phone", "profile"],
    "subject_types_supported": ["public"],
    "token_endpoint": "https://reactapp.auth.eu-central-1.amazoncognito.com/oauth2/token",
    "token_endpoint_auth_methods_supported": ["client_secret_basic", "client_secret_post"],
    "userinfo_endpoint": "https://reactapp.auth.eu-central-1.amazoncognito.com/oauth2/userInfo",
    "end_session_endpoint": `${authority}/logout?client_id=${client_id}&logout_uri=${origin}/logout`,
  },
});

export const AuthContext = React.createContext<AuthContextProps>({
  userManager,
});

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    (async () => {
      switch (window.location.pathname) {
        case '/callback':
          await userManager.signinRedirectCallback();
          window.location.replace('/');
          return;
        case '/silent_callback':
          await userManager.signinSilentCallback();
          return;
        case '/logout':
          await userManager.signoutRedirectCallback();
          window.location.replace('/');
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