import React, { useContext, useEffect, useState } from 'react';
import { User } from 'oidc-client';
import config from './config';
import userManager from './auth/UserManager';

interface AuthContextProps {
  user?: User | null;
}

export const AuthContext = React.createContext<AuthContextProps>({});

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
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;