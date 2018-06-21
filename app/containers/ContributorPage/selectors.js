/**
 * Contributor selectors
 */
import { createSelector } from 'reselect';

const selectContributor = (state) => state.get('contributor');

const makeSelectOwner = () => createSelector(
  selectContributor,
  (contributorState) => contributorState.get('owner')
);

const makeSelectRepo = () => createSelector(
  selectContributor,
  (contributorState) => contributorState.get('repo')
);

const makeSelectPage = () => createSelector(
  selectContributor,
  (contributorState) => contributorState.get('page')
);

const makeSelectPerPage = () => createSelector(
  selectContributor,
  (contributorState) => contributorState.get('perPage')
);

const makeSelectContributors = () => createSelector(
  selectContributor,
  (contributorState) => contributorState.get('contributors')
);

const makeSelectTotal = () => createSelector(
  selectContributor,
  (contributorState) => contributorState.get('total')
);

export { selectContributor, makeSelectPage, makeSelectTotal, makeSelectContributors, makeSelectOwner, makeSelectRepo, makeSelectPerPage };
