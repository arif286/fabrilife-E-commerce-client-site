import { Container, Grid } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../tshirt-shop/logos/fabrilife.svg";
import Instagram from "../../tshirt-shop/logos/Vector-1.png";
import Linkedin from "../../tshirt-shop/logos/Vector-2.png";
import YouTube from "../../tshirt-shop/logos/Vector-3.png";
import Facebook from "../../tshirt-shop/logos/Vector.png";
import "./Footer.css";

const Footer = () => {
  const company = [
    { title: "About", id: 1 },
    { title: "Site Map", id: 2 },
    { title: "Support Center", id: 3 },
    { title: "Terms Condition", id: 4 },
    { title: "Submit Listing", id: 5 },
  ];
  const links = [
    { title: "Quick Links", id: 1 },
    { title: "Rentals", id: 2 },
    { title: "Sales", id: 3 },
    { title: "Contact", id: 4 },
    { title: "Terms Condition", id: 5 },
  ];
  return (
    <footer>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <p>
              <img className="footer-logo" src={Logo} alt="" />
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h3>Company</h3>
            {company.map((name) => (
              <div key={name.id}>
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
              <div key={name.id}>
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
                We are the top real estate agency in Sydney, with agents
                available to answer any question 24/7.
              </p>
              <div className="social-link">
                <p>
                  <a href="/">
                    <img className="social-img" src={Facebook} alt="" />
                  </a>
                </p>
                <p className="social-link">
                  <a href="/">
                    <img className="social-img" src={Instagram} alt="" />
                  </a>
                </p>
                <p>
                  <a href="/">
                    <img className="social-img" src={Linkedin} alt="" />
                  </a>
                </p>
                <p>
                  <a href="/">
                    <img className="social-img" src={YouTube} alt="" />
                  </a>
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
