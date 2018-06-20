import { CHANGE_SEARCH } from './constants';

export function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search
  };
}
