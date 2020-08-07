import React from 'react';

import './homepage.scss';

import Header from '../../components/header/header';
import Advert from '../../components/advert/advert';

const Homepage = (adverts) => (

    <div className="homepage">
        <div className="homepage-contents">
            <Advert/>
            <Advert/>
            <Advert/>
            <Advert/>
        </div>
        <Header/>
    </div>
);

export default Homepage;