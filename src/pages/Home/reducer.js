/*
 *
 * Home reducer
 *
 */

import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  definitions: constants.initialState,
  error: false,
  success: false,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_DEFINITION:
        draft.loading = true;
        break;
      case constants.GET_DEFINITION_SUCCESS:
        // to cache the results and also have the offline capability, instead
        // of replacing the results with results from API, we would append new
        // data into existing one.
        const {word, phonetics, meanings} = action.payload.definitions;
        draft.definitions[word] = {word, phonetics, meanings};
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.GET_DEFINITION_FAILED:
        draft.error = action.payload;
        draft.success = false;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
