import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: 'space-evenly',
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
            <Typography variant="h6" component="p">
              Product name
            </Typography>
            <Typography variant="h6" component="p">
              Size
            </Typography>
            <Typography variant="h6" component="p">
              Price
            </Typography>
          </Grid>
          {product.map((pd) => (
            <Grid key={pd._id} xs={10} item>
              <Card style={{ width: "100%" }}>
                <CardContent className={classes.root}>
                  <Typography variant="h6" component="div">
                    {pd.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {pd.size}
                  </Typography>
                  <Typography variant="h6" component="div">
                    ${pd.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
};

export default ProductManage;