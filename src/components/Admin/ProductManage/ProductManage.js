import { Grid, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
});
const ProductManage = () => {
    const classes = useStyles();
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/event")
            .then(res => setProduct(res.data))
            .catch(err=>console.log(err))
    }, []);
    return (
      <>
        <Grid container>
          <Grid className={classes.root} item xs={10}>
            <Typography variant="h6">Product name</Typography>
            <Typography variant="h6">Size</Typography>
            <Typography variant="h6">Price</Typography>
          </Grid>
          {/* {product.map(pd =>
            <Grid xs={10} item>
              <h5>{pd.name}</h5>
              <h5>{pd.size}</h5>
              <h5>${pd.price}</h5>
            </Grid>
          )} */}
        </Grid>
      </>
    );
};

export default ProductManage;