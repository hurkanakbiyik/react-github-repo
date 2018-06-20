/**
 * Root saga manages watcher lifecycle
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectSearch } from './selectors';

import githubService from '../../services/github.services';
import { LOAD_REPOSITORIES } from './constants';
import { repositoriesFailed, repositoriesLoaded } from './actions';

export function* getRepositories() {
  const search = yield select(makeSelectSearch());
  try {
    const result = yield call(githubService,
      '/search/repositories', {
        method: 'GET'
      }, { q: search, per_page: 6 });
    yield put(repositoriesLoaded(result, search));
  } catch (err) {
    yield put(repositoriesFailed(err));
  }
}

export default function* homeSagaWatcher() {
  yield takeLatest(LOAD_REPOSITORIES, getRepositories);
}
