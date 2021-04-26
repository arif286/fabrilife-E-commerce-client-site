import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './LatestProduct.css';

const LatestProduct = () => {
    return (
      <Container>
        <h2 style={{ textAlign: "center", color: "#373a3c", marginTop:'40px'}}>
          Trendy Tees that you just can't miss !
        </h2>
        <Grid container spacing={3}>
          <Grid item sm={5} xs={12}>
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
          <Grid item xs={12} sm={7}>
            <div className="supperHero latest-product">
              <NavLink className="img-link" to="/">
                <div className="image-title">
                  <h1>supperHero</h1>
                </div>
              </NavLink>
            </div>
            <div className="shows latest-product">
              <NavLink className="img-link" to="/">
                <div className="image-title">
                  <h1>Tv shows</h1>
                </div>
              </NavLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
};

export default LatestProduct;