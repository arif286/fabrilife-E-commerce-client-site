import React from 'react';
import LatestProduct from '../LatestProduct/LatestProduct';
import SearchBar from '../SearchBar/SearchBar';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <>
            <SearchBar/>
            <Shop />
            <LatestProduct/>
        </>
    );
};

export default Home;