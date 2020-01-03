import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container box_1620">     
              <Link className="navbar-brand font-weight-bold" to="/">KNOW ME</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>    
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav ">
                  <li className="nav-item active">
                      <Link className="nav-link" to="/">About</Link>
                  </li>    
                  <li className="nav-item">
                      <Link className="nav-link" to="/work">Work</Link>
                  </li> 
                  
                  <li className="nav-item d-none">
                      <Link className="nav-link" to="/blog">Blog</Link>
                  </li> 
                  <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div> 
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Header;