import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">

              <li className="logo">
                <Link to='/movies' className="nav-link">
                    <span className="link-text logo-text">AllInOne</span>
                    <i className="fa fa-th-list" />
                </Link>
              </li>
        
              <li className="nav-item">
                <Link to='/movies' className="nav-link">
                    <i className="fa fa-film" />
                  <span className="link-text">Movies</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/books' className="nav-link">
                    <i className="fa fa-book" />
                  <span className="link-text">Books</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/recipes' className="nav-link">
                    <i className="fa fa-cutlery" />
                  <span className="link-text">Food</span>
                </Link>
              </li>
        
              <li className="nav-item">
                <Link to='/weather' className="nav-link">
                    <i className="fa fa-sun-o" />
                <span className="link-text">Weather</span>
                </Link>
              </li>

              <li className="nav-item">
                <div onClick={() => window.open('https://mohitjain.now.sh', "_blank")} className="nav-link">
                    <i className="fa fa-heart dev" />
                <span className="link-text">Mohit Jain</span>
                </div>
              </li>

            </ul>
          </nav>
    )
}

export default SideNav;