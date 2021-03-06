import * as _ from 'lodash';
import { ActionCreator, combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';

const USERS_LOADED = '@ssr/users/loaded';

const rootReducer = combineReducers({
  user: authenticationReducer
});

export default rootReducer;