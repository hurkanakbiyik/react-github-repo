import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import './style.scss';
import ContributorList from '../../components/ContributorList/ContributorList';

export default class ContributorPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onReady(this.props.match.params.owner, this.props.match.params.repo);
  }

  render() {
    const {
      loading, error, total, contributors
    } = this.props;
    const contributorsListProps = {
      loading,
      error,
      contributors,
    };
    let section = '';
    if (contributorsListProps.contributors || contributorsListProps.loading) {
      section = (
        <section>
          <div className="list-header">
            Top 10 Contributors of <b>{this.props.match.params.repo}</b>
          </div>
          <div className="list-area">
            <ContributorList {...contributorsListProps} />
          </div>
        </section>
      );
    } else {
      section = <div className="error-info"><p>You need to search and press Enter!</p></div>;
    }
    return (
      <article>
        <Helmet>
          <title>Contributors Page</title>
          <meta name="description" content="A React.js Boilerplate application contributors" />
        </Helmet>
        <div className="contributor-page">
          {section}
        </div>
      </article>
    );
  }
}

ContributorPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  contributors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onReady: PropTypes.func,
  total: PropTypes.number,
};
