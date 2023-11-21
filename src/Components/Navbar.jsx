import { faGlideG, faMeetup, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg nav-color'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <FontAwesomeIcon icon={faReact} className='icon' />
            MERN STACK DEVELOPER
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
