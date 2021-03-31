import { Container } from '@material-ui/core';
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
            <h1>you have order {orderDetail.length} items</h1>
            <div>
                {
                    orderDetail.map(product =>
                        <div>
                            <OrderCard product={product} key={ product._id}/>
                        </div>)
                }
            </div>
        </Container>
    );
};

export default Order;