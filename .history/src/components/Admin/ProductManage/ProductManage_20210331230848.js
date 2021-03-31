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
  console.log(product);
    return (
      <>
        <Grid container>
          <Grid className={classes.root} item xs={10}>
            <Typography variant="h6">Product name</Typography>
            <Typography variant="h6">Size</Typography>
            <Typography variant="h6">Price</Typography>
          </Grid>
          {product.map((pd) => (
            <Grid key={pd._id} xs={10} className={classes.root} item>
              <Typography variant="h6">{pd.name}</Typography>
              <Typography variant="h6">{pd.size}</Typography>
              <Typography variant="h6">${pd.price}</Typography>
            </Grid>
          ))}
        </Grid>
      </>
    );
};

export default ProductManage;