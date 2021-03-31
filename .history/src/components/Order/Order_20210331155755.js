import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetail, setOrderDetail] = useState({});
    useEffect(() => {
        axios.get('http://localhost:5000/orderDetail')
            .then(res => console.log(res))
        .catch(err=>console.log(err))
    }, []);
    return (
        <div>
            <h1>orser</h1>
        </div>
    );
};

export default Order;