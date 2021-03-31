import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const { id } = useParams();

    useEffect(() => {

    }, []);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default CheckOut;