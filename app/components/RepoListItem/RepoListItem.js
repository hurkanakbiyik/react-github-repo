/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import MdStar from 'react-icons/lib/md/star';
import MdWarning from 'react-icons/lib/md/warning';
import './style.scss';

export default class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    const content = (
      <div className="repo-item">
        <div className="repo-item-info">
          <h3><a target="_blank" href={item.html_url}>{item.full_name}</a></h3>
          <span className="language">{item.language}</span>
          <p className="desc">{item.description}</p>
        </div>
        <div className="repo-contributors">
          <a href={`/contributers/${item.id}/${item.full_name}`}>Show Top Contributors</a>
        </div>
        <div className="repo-item-like">
          <div className="star-area">
            <MdStar size={25} color={'#FFCA28'} />
            <span>{item.stargazers_count}</span>
          </div>
          <div className="star-area">
            <MdWarning size={25} color={'#D32F2F'} />
            <span>{item.open_issues_count}</span>
          </div>
        </div>
      </div>
    );
    // Render the content into a list item
    return content;
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
};
