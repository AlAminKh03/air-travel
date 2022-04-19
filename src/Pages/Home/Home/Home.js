import React from 'react';
import Banner from '../Banner/Banner';
import Collections from '../packages/Collection/Collections';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Collections></Collections>
        </div>
    );
};

export default Home;