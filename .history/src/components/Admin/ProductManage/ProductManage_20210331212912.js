import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductManage = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/event")
            .then(res => console.log(res.data))
            .catch(err=>console.log(err))
    }, []);
    return (
        <div>
            <h1>product Manager</h1>
        </div>
    );
};

export default ProductManage;