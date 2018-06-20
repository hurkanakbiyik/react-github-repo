import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { loadContributors } from './actions';
import {
  makeSelectTotal,
  makeSelectOwner,
  makeSelectRepo,
  makeSelectContributors,
} from './selectors';
import { makeSelectError, makeSelectLoading } from '../App/selectors';
import ContributorPage from './ContributorPage';

const mapDispatchToProps = (dispatch) => ({
  onReady: (owner, repo) => {
    dispatch(loadContributors(owner, repo));
  }
});

const mapStateToProps = createStructuredSelector({
  contributors: makeSelectContributors(),
  owner: makeSelectOwner(),
  repo: makeSelectRepo(),
  loading: makeSelectLoading(),
  total: makeSelectTotal(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'contributor', reducer });
const withSaga = injectSaga({ key: 'contributor', saga });

export default compose(withReducer, withSaga, withConnect)(ContributorPage);
export { mapDispatchToProps };
