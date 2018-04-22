// topBar
import React from 'react';
import logo from '../../../public/logo.svg';


const handleToggleClick = (event) => {
  event.preventDefault();
  const bodyElement = document.body;

  if (bodyElement.classList.contains('navigation-animated')) {

    bodyElement.classList.remove('navigation-animated');

    setTimeout(() => {
      bodyElement.classList.remove('navigation-visible');
    }, 300);
  } else {
    bodyElement.classList.add('navigation-visible');

    setTimeout(() => {
      bodyElement.classList.add('navigation-animated');
    }, 300);
  }
};

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="stuff justify-content-center align-items-center mx-auto">
        <div className="logo clearfix">
          <img src={logo} alt="Benedicta" />
        </div>
        <div
          className="toggle-bar"
          role="presentation"
          onClick={handleToggleClick}
        >
          <span />
        </div>
      </div>
    </div>
  );
}
