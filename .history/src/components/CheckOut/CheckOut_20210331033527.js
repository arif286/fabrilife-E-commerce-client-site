import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`).then(res=> setProduct(res.data.data))
    }, [id]);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default CheckOut;