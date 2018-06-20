import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from '../RepoListItem/RepoListItem';

const ReposList = ({ loading, error, repositories }) => {
  if (loading) {
    return LoadingIndicator;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <span>Something went wrong, please try again!</span>
    );
    return ErrorComponent;
  }

  if (repositories !== false) {
    return repositories.map((repo) => <RepoListItem key={repo.id} item={repo} />);
  }

  return null;
};

ReposList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  repositories: PropTypes.any
};

export default ReposList;
