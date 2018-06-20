/**
 * Root saga manages watcher lifecycle
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectRepo, makeSelectOwner, makeSelectPage } from './selectors';

import githubService from '../../services/github.services';
import { contributorsFailed, contributorsLoaded } from './actions';
import { LOAD_CONTRIBUTORS } from './constants';

export function* getContributors() {
  const owner = yield select(makeSelectOwner());
  const repo = yield select(makeSelectRepo());
  const page = yield select(makeSelectPage());
  try {
    const result = yield call(githubService,
      `/repos/${owner}/${repo}/contributors`, {
        method: 'GET'
      }, { per_page: 5, page });
    yield put(contributorsLoaded(result));
  } catch (err) {
    yield put(contributorsFailed(err));
  }
}

export default function* contributorSagaWatcher() {
  yield takeLatest(LOAD_CONTRIBUTORS, getContributors);
}