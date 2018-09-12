import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { AppContainer } from 'react-hot-loader';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTimes, faPlus} from '@fortawesome/free-solid-svg-icons';

import 'isomorphic-fetch';
import './styles/index.scss';

import { routes } from './router';
import { configureStore } from './store';
import { sign } from '../../node_modules/@types/jsonwebtoken';
import { loginSuccess, authenticate } from './actions/userActions';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './withRoot';

library.add(faEdit);
library.add(faTimes);
library.add(faPlus);

const element = document.getElementById('root');
const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
delete window.__PRELOADED_STATE__;

function render (route: RouteConfig[]) {
  const childContent = (
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(route)}
        </BrowserRouter>
      </Provider>
    </AppContainer>
  );

  ReactDOM.hydrate(
    <MuiThemeProvider theme={theme}>
      {childContent}
    </MuiThemeProvider>
    , element);
}

render(routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
    const newRoutes = require('./router').routes;
    render(newRoutes);
  });
}
