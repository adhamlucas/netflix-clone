import React from 'react';
import './index.css';

const Header = ({black}) => {
  return (
    <header className={black ? 'header--black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netlix logo"/>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://i.pinimg.com/564x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg" alt="usuario"/>
        </a>
      </div>
    </header>
  );
}

export default Header;