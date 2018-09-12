import * as loginActions from '../constants/actions/login';
import * as registerActions from '../constants/actions/register';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import AuthApi from '../api/authApi';

export function loginSuccess(userData) {
    return {type: loginActions.LOGIN_SUCCESS, userData};
}


export function registerSuccess(userData) {
    return {type: registerActions.REGISTER_SUCCESS, userData};
}

export function authenticationSuccess(user) {
  return {type: loginActions.AUTHENTICATION_SUCCESS, user};
}

export function authenticate(){

  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
 
    return AuthApi.getUser().then(res => {
      return res.json();
    }).then(data => {
      if(data) {
        dispatch(authenticationSuccess(data));
      }
    });
  }
}

export function logIn(loginData) {
    return function (dispatch, getState) {
      dispatch(beginAjaxCall());

      return AuthApi.logIn(loginData).then(res => {
              return res.json();
            }).then(data => {
              if (data.jwt) {
                localStorage.setItem('user', JSON.stringify(data));
              }
              dispatch(loginSuccess(data));
              return data.role;
              })
              .catch(error => {
              dispatch(ajaxCallError());
              throw(error);
            });
    };
}

export function signUp(registerData) {
    return function (dispatch, getState) {
      dispatch(beginAjaxCall());

      return AuthApi.signUp(registerData).then(res => {
              return res.json();
            }).then(data => {
              dispatch(registerSuccess(data));  
              })
              .catch(error => {
              dispatch(ajaxCallError());
              throw(error);
            });
    };
}