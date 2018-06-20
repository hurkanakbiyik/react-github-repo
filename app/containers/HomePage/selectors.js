/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectSearch = () => createSelector(
  selectHome,
  (homeState) => homeState.get('search')
);

const makeSelectRepositories = () => createSelector(
  selectHome,
  (homeState) => homeState.get('repositories')
);

const makeSelectTotal = () => createSelector(
  selectHome,
  (homeState) => homeState.get('total')
);

export { selectHome, makeSelectTotal, makeSelectRepositories, makeSelectSearch };
