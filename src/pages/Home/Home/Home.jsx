import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import ZapShiftHome from '../Brands/Zapshifthome/Zapshifthome';
import FAQ from './../Faq/Faq';
import HowItWorksAndServices from './../Howitworksandservices/Howitworksandservices';
import FeaturesAndMerchant from './../Featuresandmerchant/Featuresandmerchant';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorksAndServices></HowItWorksAndServices>
            <Brands></Brands>
            <FeaturesAndMerchant></FeaturesAndMerchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;