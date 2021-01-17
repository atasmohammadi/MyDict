import {call, put, takeEvery} from 'redux-saga/effects';
import request from '../../utils/request';
import * as constants from './constants';
import * as actions from './actions';
import {flatten, flattenDepth} from 'lodash';
import {
  definitionEndpoint,
  translationEndpoint,
  translationEndpointHeaders,
  definitionEndpointHeaders,
} from '../../constants';

function* getDefinition({payload: {word, language, secondLanguage}}) {
  const options = {
    method: 'GET',
    headers: definitionEndpointHeaders,
  };
  const requestURL = `${definitionEndpoint}/${language}/${word}`;
  const body = JSON.stringify({
    text: word,
    mode: `${language}_${secondLanguage}`,
  });
  const requestOptions = {
    method: 'POST',
    headers: {
      ...translationEndpointHeaders,
      'Content-Length': body.length,
    },
    body,
    redirect: 'follow',
  };
  try {
    const definition = yield call(request, requestURL, options);
    if (!definition.data.length) {
      throw new Error('No results');
    }
    const translation = yield call(
      request,
      translationEndpoint,
      requestOptions,
    );
    const baseTranslation = flatten(translation.data.tr.base)[1] || undefined;
    const elaboratedTranslation =
      flattenDepth(translation.data.tr.alignments, 2)[2].map((i) => i[0]) ||
      undefined;
    const translated = [];
    if (baseTranslation && !baseTranslation.match(/^[a-z0-9]+$/i)) {
      translated.push(baseTranslation);
    }
    if (elaboratedTranslation) {
      elaboratedTranslation.forEach((i) => {
        if (!i.match(/^[a-z0-9]+$/i) && !translated.includes(i)) {
          translated.push(i);
        }
      });
    }
    yield put(
      actions.getDefinitionSuccess({
        ...definition.data[0],
        translation: [
          {
            language: secondLanguage,
            translation: translated.length ? translated : null,
          },
        ],
      }),
    );
  } catch (error) {
    yield put(
      actions.getDefinitionFailed(
        error.response ? error.response.status : error,
      ),
    );
  }
}

export default function* HomeSaga() {
  yield takeEvery(constants.GET_DEFINITION, getDefinition);
}
