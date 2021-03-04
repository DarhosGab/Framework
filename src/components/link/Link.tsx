import React from 'react';

import './Link.css';

import logoGit from '../../img/git.svg';
import logoLink from '../../img/linkedin.svg';

function Link() {
  return (
    <nav className="references">
      <a href="https://www.linkedin.com/in/darhosgabriel/">
        <img src={logoLink} alt="" className="linkdin site" />
      </a>
      <a href="https://github.com/DarhosGab">
        <img src={logoGit} alt="" className="git site" />
      </a>
    </nav>
  );
}

export default Link;
