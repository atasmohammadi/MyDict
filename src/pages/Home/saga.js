import {call, put, takeEvery} from 'redux-saga/effects';
import request from '../../utils/request';
import * as constants from './constants';
import * as actions from './actions';
import {baseUrl} from '../../constants';

function* getDefinition({payload: {word, language}}) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = `${baseUrl}/${language}/${word}`;
  try {
    const {data} = yield call(request, requestURL, options);
    if (!data.length) {
      throw new Error('No results');
    }
    yield put(actions.getDefinitionSuccess(data[0]));
  } catch (error) {
    yield put(actions.getDefinitionFailed(error.response.status || error));
  }
}

export default function* HomeSaga() {
  yield takeEvery(constants.GET_DEFINITION, getDefinition);
}
