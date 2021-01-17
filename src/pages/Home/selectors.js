import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the Home state domain
 */

const selectHomeDomain = (state) => state.home || initialState;

/**
 * Other specific selectors
 */
const homeDomain = createSelector(selectHomeDomain, (subState) => subState);

const loading = createSelector(selectHomeDomain, (subState) => subState.loading);

const definitions = createSelector(selectHomeDomain, (subState) => subState.definitions);

const error = createSelector(selectHomeDomain, (subState) => subState.error);

const success = createSelector(selectHomeDomain, (subState) => subState.success);

const definitionsArray = createSelector(selectHomeDomain, (subState) =>
    Object.values(subState.definitions).filter(def => !def.saved),
  );

const savedDefinitionsArray = createSelector(selectHomeDomain, (subState) =>
    Object.values(subState.definitions).filter(def => !!def.saved),
  );
/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(selectHomeDomain, (subState) => subState);

export default makeSelectHome;
export {
  homeDomain,
  loading,
  error,
  success,
  definitions,
  definitionsArray,
  savedDefinitionsArray,
};
