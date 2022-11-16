import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
      <header id="header">
          <div className="container">
              <div className="header">
                  <Link to="/home" className="menu">Home</Link>

              </div>
          </div>

      </header>
    );
};

export default Header;