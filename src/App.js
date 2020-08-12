import React, { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    if(token) {
      setToken(token);
      spotify.setAccessToken(token);
      spotify.getMe().then(user => {
        console.log('user', user);
      });
    }
  }, []);
  return (
    <div className="app">
    {
      token ? (
        <Player />
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
