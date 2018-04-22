// HomePage
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @return {JSX} - JSX element
 */
export default function TabTags(props) {
  return (
    <li
      className="nav-item"
    >
      <button
        className={props.currentTab === props.tabName ?
          'nav-link_ active' : 'nav-link_'}
        name={props.tabName}
        onClick={props.changeTab}
      >
        {props.linkDescription}
      </button>
    </li>

  );
}
TabTags.propTypes = {
  linkDescription: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired
};
