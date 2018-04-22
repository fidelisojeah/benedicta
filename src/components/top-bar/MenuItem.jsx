// HomePage
import React from 'react';
import PropTypes from 'prop-types';
import SamLink from '../common/SamLink';

/**
 * @param {Object} props - Prop
 *
 * @return {JSX} - JSX element
 */
const handleClick = () => {
  const bodyElement = document.body;

  bodyElement.classList.remove('navigation-animated');

  setTimeout(() => {
    bodyElement.classList.remove('navigation-visible');
  }, 300);
};

/**
 * @return {JSX} - JSX element
 */
export default function NavItem(props) {
  return (
    <li>
      <SamLink
        handleClick={handleClick}
        to={props.navLink}
        className={`navigation-link ${props.linkClass}`}
      >
        <div>
          <strong>
            {props.linkName}
          </strong>
          <span>
            {props.linkDescription}
          </span>
        </div>
      </SamLink>
    </li>
  );
}
NavItem.propTypes = {
  navLink: PropTypes.string,
  linkClass: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  linkDescription: PropTypes.string.isRequired
};
NavItem.defaultProps = {
  navLink: ''
};
