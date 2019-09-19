import {
  CATEGORIIES_ACTION_TYPES as constants,
  UI_ACTION_TYPES
} from "../constants";
import api from "./api";

const errorHandler = (dispatch, error) => {
  dispatch({
    type: constants.LOAD_DATA_FAIL,
    error
  });
};

export function fetchCategoryList() {
  return dispatch => {
    dispatch({
      type: constants.LOAD_DATA_REQUEST
    });

    try {
      const promise = api.fetch();
      promise.then(data => {
        dispatch({
          type: constants.LOAD_DATA_SUCCESS,
          payload: data
        });
      });
    } catch (error) {
      errorHandler(dispatch, error);
    }
  };
}

export function switchCategoryStatus(id) {
  return (dispatch, getState) => {
    const nextCategoryStatus = !getState().categories.allowedIdis.includes(id);
    try {
      const updateItemPromise = api.updateItem(id, {
        allowed: nextCategoryStatus
      });
      updateItemPromise.then(data => {
        dispatch({
          type: constants.SWITCH_CATEGORY_STATUS,
          id
        });
      });
    } catch (error) {
      errorHandler(dispatch, error);
    }
  };
}

export function blockAll() {
  return dispatch => {
    try {
      api.updateAll({ allowed: false });
      dispatch({
        type: constants.BLOCK_ALL_CATEGORIES
      });
    } catch (error) {
      errorHandler(dispatch, error);
    }
  };
}

export function allowAll() {
  return dispatch => {
    try {
      api.updateAll({ allowed: true });
      dispatch({
        type: constants.ALLOW_ALL_CATEGORIES
      });
    } catch (error) {
      errorHandler(dispatch, error);
    }
  };
}

// synchronous action
//  Action-creator trough react-thunk middleware can optionally returns
// function or object dapends on "sync" or "asyn" action it creates.
export function switchVisibility(property) {
  return {
    type: UI_ACTION_TYPES.SWITCH_VISIBILITY,
    property
  };
}
