import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './LatestProduct.css';

const LatestProduct = () => {
    return (
      <Container>
        <h2>Trendy Tees that you just can't miss !</h2>
        <Grid container spacing={3}>
          <Grid item md={5} sm={12}>
            <div className="music latest-product">
              <NavLink className="img-link" to="/">
                <div className="image-title">
                  <h1>music</h1>
                </div>
              </NavLink>
            </div>
            <div className="gaming latest-product">
              <NavLink className="img-link" to="/">
                <div className="image-title">
                  <h1>gaming</h1>
                </div>
              </NavLink>
            </div>
            <div className="football latest-product">
              <NavLink className="img-link" to="/">
                <div className="image-title">
                  <h1>football</h1>
                </div>
              </NavLink>
            </div>
            <div className="science latest-product">
              <NavLink className="img-link" to="/">
                <div className="image-title">
                  <h1>science</h1>
                </div>
              </NavLink>
            </div>
          </Grid>
          <Grid item sm={12} md={7}>
            <div className="supperHero latest-product">
              <h4>SupperHero</h4>
            </div>
            <div className="shows latest-product">
              <h4>Tv Shows</h4>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
};

export default LatestProduct;