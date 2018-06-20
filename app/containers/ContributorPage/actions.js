import { LOAD_CONTRIBUTORS, LOAD_CONTRIBUTORS_ERROR, LOAD_CONTRIBUTORS_SUCCESS, LOAD_MORE_CONTRIBUTORS } from './constants';

export function loadContributors(owner, repo) {
  return {
    type: LOAD_CONTRIBUTORS,
    owner,
    repo
  };
}

export function loadMore() {
  return {
    type: LOAD_MORE_CONTRIBUTORS,
  };
}

export function contributorsLoaded(payload, search) {
  return {
    type: LOAD_CONTRIBUTORS_SUCCESS,
    payload,
    search,
  };
}

export function contributorsFailed(error) {
  return {
    type: LOAD_CONTRIBUTORS_ERROR,
    error,
  };
}
