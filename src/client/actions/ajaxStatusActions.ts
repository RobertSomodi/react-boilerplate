import * as actions from '../constants/actions/ajax';

export function beginAjaxCall() {
  return {type: actions.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: actions.AJAX_CALL_ERROR};
}