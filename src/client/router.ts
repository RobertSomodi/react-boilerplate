import { RouteConfig } from 'react-router-config';

import Root from './root';
import requireAuthentication from './containers/RequireAuthentication';
import NotFound from './components/notFound';
import Home from './containers/HomeContainer';
import Admin from './containers/AdminContainer';
import Login from './containers/LoginContainer';
import Register from './containers/RegisterContainer';


export const routes: RouteConfig[] = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: requireAuthentication(Home),
      },
      {
        path: '/admin',
        exact: true,
        component: requireAuthentication(Admin),
      },
      {
        path: '/auth/login',
        exact: true,
        component: Login
      },
      {
        path: '/auth/register',
        exact: true,
        component: Register
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
