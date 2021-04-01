import { Card, CardContent, CircularProgress, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "20px",
  },
  spinier: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },
});
const ProductManage = () => {
    const classes = useStyles();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
          .get("https://lychee-custard-24286.herokuapp.com/event")
          .then((res) => setProduct(res.data))
          .catch((err) => console.log(err));
    }, []);
  console.log(product);

  const handleDeleteProduct = async (event,id) => {
    console.log('click me',event.target)
    // try {
    //   const res = await axios.delete(
    //     `https://lychee-custard-24286.herokuapp.com/delete/${id}`
    //   );
    //   console.log(res)
    // } catch (error) {
    //   console.error(error);
    // }
  }
  console.log(product)
    return (
      <Container>
        {product.length === 0 ? (
          <div className={classes.spinier}>
            <CircularProgress />
          </div>
        ) : (
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
              <Typography variant="h6" component="p">
                edit/delete
              </Typography>
            </Grid>
            {product?.map((pd) => (
              <Grid key={pd._id} xs={10} item>
                <Card style={{ width: "100%", marginBottom: "20px" }}>
                  <CardContent className={classes.root}>
                    <Typography variant="h6" component="p">
                      {pd.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {pd.size}
                    </Typography>
                    <Typography variant="h6" component="p">
                      ${pd.price}
                    </Typography>
                    <Typography>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleDeleteProduct(EventTarget,pd._id);
                        }}
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    );
};

export default ProductManage;