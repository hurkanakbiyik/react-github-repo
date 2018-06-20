import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';

import './style.scss';

const ContributorList = ({ loading, error, contributors }) => {
  if (loading) {
    return LoadingIndicator;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <span>Something went wrong, please try again!</span>
    );
    return ErrorComponent;
  }

  if (contributors !== false) {
    return contributors.map((item) => (
      <div className="contributor-area" key={item.id}>
        <div><img alt={'user'} src={item.avatar_url} /></div>
        <div className="info"><a href={item.html_url}>{item.login}</a></div>
        <div className="cont-number">
          <span>{item.contributions}</span>
        </div>
      </div>
    ));
  }

  return null;
};

ContributorList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  contributors: PropTypes.any
};

export default ContributorList;
