import { fromJS } from 'immutable';
import {
  LOAD_CONTRIBUTORS,
  LOAD_CONTRIBUTORS_ERROR,
  LOAD_CONTRIBUTORS_SUCCESS,
  LOAD_MORE_CONTRIBUTORS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  owner: '',
  repo: '',
  contributors: [],
  total: 0,
  loading: false,
  error: false,
  page: 1
});

function contributorReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CONTRIBUTORS:
      return state
        .set('repo', action.repo)
        .set('owner', action.owner)
        .set('loading', true)
        .set('error', false);
    case LOAD_MORE_CONTRIBUTORS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('page', state.get('page') + 1);
    case LOAD_CONTRIBUTORS_SUCCESS: {
      const newContributors = action.payload.map((contributor) =>
        ({ ...contributor })
      );
      const oldContributors = state.get('contributors');
      return state
        .set('contributors', [...oldContributors, ...newContributors])
        .set('total', action.payload.total_count)
        .set('loading', false)
        .set('search', action.search);
    }
    case LOAD_CONTRIBUTORS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default contributorReducer;
