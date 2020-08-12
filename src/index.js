import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import { initialState } from './reducer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer
      initialState={initialState}
      reducer
    >
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
