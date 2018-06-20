import { fromJS } from 'immutable';
import { CHANGE_SEARCH, LOAD_REPOSITORIES, LOAD_REPOSITORIES_ERROR, LOAD_REPOSITORIES_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  search: '',
  repositories: false,
  total: 0
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH:
      return state.set('search', action.search);
    case LOAD_REPOSITORIES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('repositories', false);
    case LOAD_REPOSITORIES_SUCCESS: {
      return state
        .set('repositories', action.payload.items.map((repo) => repo))
        .set('total', action.payload.total_count)
        .set('loading', false)
        .set('search', action.search);
    }
    case LOAD_REPOSITORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default homeReducer;
