import { Grid } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../tshirt-shop/logos/fabrilife.svg';
import Instagram from '../../tshirt-shop/logos/Vector-1.png';
import Linkedin from '../../tshirt-shop/logos/Vector-2.png';
import YouTube from '../../tshirt-shop/logos/Vector-3.png';
import Facebook from '../../tshirt-shop/logos/Vector.png';
import './Footer.css';

const Footer = () => {
  const company = [
     {title:"About"},
    {title:"Site Map"},
    {title:"Support Center"},
    {title:"Terms Condition"},
    {title:"Submit Listing"},
  ];
  const links = [
    {title: "Quick Links"},
    {title:"Rentals"},
    {title:"Sales"},
    {title:"Contact"},
    {title:"Terms Condition"},
    ];
  return (
    <footer>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <p>
            <img src={Logo} alt="" />
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h3>Company</h3>
          {company.map((name) => (
            <div>
              <ul className="footer-link">
                <li>
                  <NavLink to="/" className="company-list">
                    {name.title}
                  </NavLink>
                </li>
              </ul>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h3>Quick Links</h3>
          {links.map((name) => (
            <div>
              <ul className="footer-link">
                <li>
                  <NavLink to="/" className="company-list">
                    {name.title}
                  </NavLink>
                </li>
              </ul>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h3>About us</h3>
          <div>
            <p>
              We are the top real estate agency in Sydney, with agents available
              to answer any question 24/7.
              </p>
            <p className="social-link">
              <a href="/">
                <img src={Facebook} alt="" />
              </a>
            </p>
            <p className="social-link">
              <a href="/">
                <img src={Instagram} alt="" />
              </a>
            </p>
            <p className="social-link">
              <a href="/">
                <img src={Linkedin} alt="" />
              </a>
            </p>
            <p className="social-link">
              <a href="/">
                <img src={YouTube} alt="" />
              </a>
            </p>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
