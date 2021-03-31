import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {

    }, []);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default CheckOut;