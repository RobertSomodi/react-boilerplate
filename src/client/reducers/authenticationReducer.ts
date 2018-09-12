import * as loginActions from '../constants/actions/login'; 
import {user} from '../reducers/initialState';

export default function authentication(state = user, action) {
  switch (action.type) {
    case loginActions.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case loginActions.LOGIN_SUCCESS:
      return {
        isAuthenticated: (action.userData),
        userData: action.userData
      };
    case loginActions.AUTHENTICATION_SUCCESS:
      return action.user;
    case loginActions.LOGIN_FAILURE:
      return {};
    case loginActions.LOGOUT:
      return {};
    default:
      return state
  }
}