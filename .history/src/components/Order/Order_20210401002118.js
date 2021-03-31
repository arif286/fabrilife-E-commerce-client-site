import { Container, Grid } from '@material-ui/core';
import Alert from "@material-ui/lab/Alert";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderCard from './OrderCard';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetail, setOrderDetail] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:5000/orderDetail?email=${loggedInUser.email}`)
        .then((res) => setOrderDetail(res.data))
        .catch((err) => console.log(err));
    }, [loggedInUser.email]);



    return (
      <Container>
        {orderDetail.length > 0 ? (
          <Grid container spacing={3}>
            <Grid xs={12} item>
              <Alert severity="success">
                Dear {orderDetail[0]?.userName},
                You Have order {orderDetail.length} items!
              </Alert>
            </Grid>
            <Grid spacing={4} container xs={12} item>
              {orderDetail.map((product) => (
                <Grid container item direction="column" sm={6} md={4}>
                  <OrderCard product={product} key={product._id} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Alert severity="error">You have no order!</Alert>
        )}
      </Container>
    );
};

export default Order;