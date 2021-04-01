import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterInfo = () => {
    return (
      <div>
        <ul className="footer-link">
          <li>
            <NavLink className="company-list">About</NavLink>
          </li>
          <li>
            <NavLink className="company-list">Site Map</NavLink>
          </li>
          <li>
            <NavLink className="company-list">Support Center</NavLink>
          </li>
          <li>
            <NavLink className="company-list">Terms Conditions</NavLink>
          </li>
          <li>
            <NavLink className="company-list"> Submit Listing</NavLink>
          </li>
        </ul>
      </div>
    );
};

export default FooterInfo;