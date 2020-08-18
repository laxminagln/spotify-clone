import React, { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    if(token) {
      dispatch({
        type: 'SET_TOKEN',
        token: token,
      })
      spotify.setAccessToken(token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
    }
  }, []);
  return (
    <div className="app">
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
