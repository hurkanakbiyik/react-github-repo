import React from 'react';
import { Helmet } from 'react-helmet';
import MdSearch from 'react-icons/lib/md/search';
import PropTypes from 'prop-types';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.search && this.props.search.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, total, repositories
    } = this.props;
    const repositoriesListProps = {
      loading,
      error,
      repositories,
    };
    let section = <div className="error-info"><p>You need to search and press "Enter"!</p></div>;
    if (repositoriesListProps.repositories) {
      const repos = repositoriesListProps.repositories.map((repo) => <h3 key={repo.id}>{repo.full_name}</h3>);
      section = (
        <section>
          <div className="list-area">
            {repos}
          </div>
        </section>
      );
    }
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <div className="search-header">
            <div className="search-area">
              <MdSearch size={25} />
              <form onSubmit={this.props.onSubmitForm}>
                <input onChange={this.props.onChangeSearch} type="text" placeholder={'Search repository'} />
              </form>
            </div>
          </div>
          {section}
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repositories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  search: PropTypes.string,
  total: PropTypes.number,
  onChangeSearch: PropTypes.func,
};
