import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductManage = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/event");
    }, []);
    return (
        <div>
            <h1>product Manager</h1>
        </div>
    );
};

export default ProductManage;