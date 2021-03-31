import { Container, Grid } from '@material-ui/core';
import React from 'react';


const LatestProduct = () => {
    return (
        <Container>
            <Grid container>
                <Grid item md={5} sm={12} >
                    <div className='music'>
                        <h4>Music</h4>
                    </div>
                    <div className='gaming'>
                        <h4>Gaming</h4>
                    </div>
                    <div className='football'>
                        <h4>Football</h4>
                    </div>
                    <div className='science'>
                        <h4>Science</h4>
                    </div>
                </Grid>
                <Grid item sm={12} md={7}>
                    <div className='supperHero'>
                        <h4>SupperHero</h4>
                    </div>
                    <div className='shows'>
                        <h4>Tv Shows</h4>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LatestProduct;