/*
 *
 * Home actions
 *
 */

import * as constants from './constants';

export const getDefinition = (word, language, secondLanguage) => ({
  type: constants.GET_DEFINITION,
  payload: {word, language, secondLanguage},
});

export const getDefinitionSuccess = (definitions) => ({
  type: constants.GET_DEFINITION_SUCCESS,
  payload: {definitions},
});

export const getDefinitionFailed = (error) => ({
  type: constants.GET_DEFINITION_FAILED,
  payload: error,
});

export const toggleSaved = (word) => ({
  type: constants.TOGGLE_SAVED,
  payload: {word},
});
