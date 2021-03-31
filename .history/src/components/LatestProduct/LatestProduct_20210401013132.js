import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './LatestProduct.css';

const LatestProduct = () => {
    return (
      <Container>
        <h1>Trendy Tees that you just can't miss !</h1>
        <Grid container spacing={3}>
          <Grid item md={5} sm={12}>
            <div className="music latest-product">
              <h4>Music</h4>
            </div>
            <div className="gaming latest-product">
              <h4>Gaming</h4>
            </div>
            <div className="football latest-product">
              <h4>Football</h4>
            </div>
            <div className="science latest-product">
              <h4>Science</h4>
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