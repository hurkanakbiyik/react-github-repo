import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';
import { changeSearch, loadRepositories } from './actions';
import { makeSelectRepositories, makeSelectSearch, makeSelectTotal } from './selectors';
import { makeSelectError, makeSelectLoading } from '../App/selectors';

const mapDispatchToProps = (dispatch) => ({
  onChangeSearch: (evt) => dispatch(changeSearch(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepositories());
  }
});

const mapStateToProps = createStructuredSelector({
  repositories: makeSelectRepositories(),
  search: makeSelectSearch(),
  total: makeSelectTotal(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
