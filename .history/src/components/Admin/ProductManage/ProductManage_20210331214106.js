import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductManage = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/event")
            .then(res => setProduct(res.data))
            .catch(err=>console.log(err))
    }, []);
    return (
        <>
            <Grid container>
                <Grid item xs={10}>
                    <h5>Product name</h5>
                    <h5>Size</h5>
                    <h5>Price</h5>
                </Grid>
                {
                    product.map(pd =>
                        <Grid item>
                            <h5>{pd.name}</h5>
                            <h5>{pd.size}</h5>
                            <h5>${pd.price}</h5>
                        </Grid>)
                }
            </Grid>
        </>
    );
};

export default ProductManage;