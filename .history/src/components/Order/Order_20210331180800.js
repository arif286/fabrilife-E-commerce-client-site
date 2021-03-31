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
          <Grid container>
            <Grid xs={12} item>
              <Alert severity="success">
                You Have order {orderDetail.length} items!
              </Alert>
            </Grid>
            <Grid xs={12} item>
              {orderDetail.map((product) => (
                <Grid sm={4}>
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