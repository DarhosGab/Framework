import React from 'react';

import './Link.css';

import logoGit from '../../assets/img/git.svg';
import logoLink from '../../assets/img/linkedin.svg';

function Link() {
  return (
    <nav className="references">
      <a href="https://www.linkedin.com/in/darhosgabriel/">
        <img src={logoLink} alt="" className="linkedin site" />
      </a>
      <a href="https://github.com/DarhosGab">
        <img src={logoGit} alt="" className="gitHub site" />
      </a>
    </nav>
  );
}

export default Link;
