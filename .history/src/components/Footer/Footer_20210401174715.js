import { Grid } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  const company = [
    "About",
    "Site Map",
    "Support Center",
    "Terms Condition",
    "Submit Listing",
  ];
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <p>
            <img alt="" />
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h3>Company</h3>
          {company.map((name) => (
            <div>
              <ul className="footer-link">
                <li>
                  <NavLink className="company-list">{name}</NavLink>
                </li>
              </ul>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h3>Quick Links</h3>
          <FooterInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h3>About us</h3>
          <div>
            <p></p>
            <p>
              <a href="endregion">
                <img alt="" />
              </a>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
