import React from 'react';
import Footer from '../Footer/Footer';
import LatestProduct from '../LatestProduct/LatestProduct';
import SearchBar from '../SearchBar/SearchBar';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <>
            <SearchBar/>
            <Shop />
            <LatestProduct />
            <Footer/>
        </>
    );
};

export default Home;