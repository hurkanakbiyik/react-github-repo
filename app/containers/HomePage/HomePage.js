import React from 'react';
import { Helmet } from 'react-helmet';
import MdSearch from 'react-icons/lib/md/search';
import PropTypes from 'prop-types';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }

  render() {
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
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onChangeSearch: PropTypes.func,
  onSubmitForm: PropTypes.func,
};
