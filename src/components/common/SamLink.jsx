import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props - Prop
 *
 * @return {JSX} - JSX element
 */
const SamLink = props =>
  (
    /^https?:\/\//.test(props.to) ?
      <a href={props.to} className={props.className}>{props.children}</a> :
      <Link
        to={`/${props.to}`}
        onClick={props.handleClick}
        className={props.className}
      >
        {props.children}
      </Link>
  );
SamLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
SamLink.defaultProps = {
  to: '',
  handleClick: {}
};
export default SamLink;
