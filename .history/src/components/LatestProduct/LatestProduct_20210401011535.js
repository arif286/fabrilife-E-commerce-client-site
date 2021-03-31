import { Container, Grid } from '@material-ui/core';
import React from 'react';

const LatestProduct = () => {
    return (
        <Container>
            <Grid container>
                <Grid item md={5} sm={12} >
                    <div>
                        <h4>Music</h4>
                    </div>
                    <div>
                        <h4>Gaming</h4>
                    </div>
                    <div>
                        <h4>Football</h4>
                    </div>
                    <div>
                        <h4>Science</h4>
                    </div>
                </Grid>
                <Grid item sm={12} md={7}>
                    <div>
                        <h4>SupperHero</h4>
                    </div>
                    <div>
                        <h4>Tv Shows</h4>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LatestProduct;