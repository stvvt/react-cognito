import React, { } from 'react';
import { useAuth } from './AuthContext';
import userManager from './auth/UserManager';

const AuthStatus: React.FC = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    userManager.signoutRedirect();
  };

  const handleLogin = () => {
    userManager.signinRedirect();
  };

  const handleSignup = () => {
    userManager.signinRedirect();
  };

  if (typeof user === 'undefined') {
    return <p>Loading ...</p>
  }

  if (user) {
    return (<>
      <p>
        Logged in as {user.profile.email} ({user.profile.email_verified ? '+' : '-'})
      </p>
      <img src={user.profile.picture} alt="Profile avatar" />
      <h1>Wellcome, {user.profile.name}</h1>
      <p>from {user.profile.identities[0].providerName}</p>
      <hr />
      <pre>
        {JSON.stringify(user, null, '  ')}
      </pre>
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>
    </>);
  }

  return (<>
    <p>You're not logged in.</p>
    <p>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
    </p>
  </>);
};

export default AuthStatus;
