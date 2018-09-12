import * as registerActions from '../constants/actions/register';
 
export function registration(state = {}, action) {
  switch (action.type) {
    case registerActions.REGISTER_REQUEST:
      return { registering: true };
    case registerActions.REGISTER_SUCCESS:
      return {};
    case registerActions.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}