import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter } from "connected-react-router";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import configureStore, { history } from './store/store';

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
