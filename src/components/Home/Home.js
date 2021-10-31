import React from 'react';
import Banner from './banner/Banner';
import Extra from './Extra Section/Extra';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Service from './service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Extra></Extra>
            <Footer></Footer>

        </div>
    );
};

export default Home;