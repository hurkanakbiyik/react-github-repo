import { fromJS } from 'immutable';
import { CHANGE_SEARCH } from './constants';

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
    default:
      return state;
  }
}

export default homeReducer;
