import React from 'react';
import AuthContextProvider from './AuthContext';
import AuthStatus from './AuthStatus';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <AuthStatus />
      </div>
    </AuthContextProvider>
  );
}

export default App;
