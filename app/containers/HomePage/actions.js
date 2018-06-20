import { CHANGE_SEARCH, LOAD_REPOSITORIES, LOAD_REPOSITORIES_ERROR, LOAD_REPOSITORIES_SUCCESS } from './constants';

export function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search
  };
}

export function loadRepositories() {
  return {
    type: LOAD_REPOSITORIES,
  };
}

export function repositoriesLoaded(payload, search) {
  return {
    type: LOAD_REPOSITORIES_SUCCESS,
    payload,
    search,
  };
}

export function repositoriesFailed(error) {
  return {
    type: LOAD_REPOSITORIES_ERROR,
    error,
  };
}
