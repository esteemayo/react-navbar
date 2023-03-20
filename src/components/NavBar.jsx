import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import { links, social } from './../services/dataService';
import logo from '../logo.svg';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linkContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
