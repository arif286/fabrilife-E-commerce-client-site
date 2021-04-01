import { Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <div>
        <Grid container>
            <Grid item xs={12} sm={6} md={3}>
            <p><img alt=''/></p>
          </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <h3>Company</h3>
                    <div>
                        <ul className='footer-link'>
                            <li>
                                <NavLink className='company-list'>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='company-list'>

                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='company-list'></NavLink>
                            </li>
                            <li>
                                <NavLink className='company-list'></NavLink>
                            </li>
                            <li>
                                <NavLink className='company-list'></NavLink>
                            </li>
                        </ul>
                    </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
        </Grid>
      </div>
    );
};

export default Footer;