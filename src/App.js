import React, { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    if(token) {
      setToken(token);
    }
  }, []);
  return (
    <div className="app">
    {
      token ? (
        <h1>Logged in</h1>
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
