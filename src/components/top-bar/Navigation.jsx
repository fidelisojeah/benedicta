// HomePage
import React from 'react';

/**
 * @return {JSX} - JSX element
 */
import MenuItem from './MenuItem';

const menuItems = [
  {
    navLink: 'about-me',
    linkName: 'Know Me!!',
    linkDescription: 'Get to Know me Better',
    linkClass: 'about',
  },
  {
    navLink: 'https://www.linkedin.com/in/benedicta-grandeur-54362a82',
    linkName: 'Follow Me!!!',
    linkDescription: 'Head over to my Linkedin Page for information on my Career.',
    linkClass: 'professional',
  },
  {
    navLink: 'https://medium.com/@benedicta.grandeur',
    linkName: 'Read Me!!',
    linkDescription: 'Know about what I have been writing recently',
    linkClass: 'blog',
  },
  {
    navLink: 'contact-me',
    linkName: 'Contact Me!!',
    linkDescription: 'hello@benedicta.xyz',
    linkClass: 'contact',
  }

];


export default function Navigation() {
  return (
    <div className="clearfix navigation-main">
      <ul className="navigation-ul clearfix">
        {
          menuItems.map(item =>
            (<MenuItem
              key={item.navLink}
              {...item}
            />))
        }
      </ul>
    </div>
  );
}
