import * as React from 'react';
import * as _ from 'lodash';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes, matchRoutes } from 'react-router-config';

import { routes } from '../../client/router';
import { configureStore } from '../../client/store';
import {theme} from '../../client/withRoot';
import { SheetsRegistry } from 'react-jss/lib/jss';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
export interface IComponentConfig {
  store: Store<any>;
  routerContext: {
    url?: string;
    action?: string;
    location?: any;
    status?: number;
  };
  locationUrl: string;
}

interface IComponentProps {
  config: IComponentConfig;
}

export function Component ({ config }: IComponentProps) {
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();
  return (
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <Provider store={config.store}>
          <StaticRouter
            context={config.routerContext}
            location={config.locationUrl}
          >
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      </MuiThemeProvider>
    </JssProvider>
  );
}

export function getStore (initialState): Store<any> {
  return configureStore(initialState);
}

export function fetchData (url: string, store: Store<any>) {
  const branch = matchRoutes(routes, url);

  const promises = branch.map(({ route, match }) => {
    const fetchDataPromise = _.get(route, 'component.fetchData');

    return fetchDataPromise instanceof Function
      ? fetchDataPromise(store, match)
      : Promise.resolve(null);
  });

  return promises;
}
