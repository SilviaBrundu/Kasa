import React from 'react';
import ImageSource1 from "../img/ImageSource1.png"
import Banner from '../components/Banner';
import Offers from '../components/Offers';
// import OfferCard from '../components/OfferCard';
import Layout from '../components/Layout';

function Home () {
    return (
        <Layout>
                <Banner title={'Chez vous, partout et ailleurs'} image={ImageSource1} alt={'Vue sur la mer'}/>
                <Offers />
                {/* <OfferCard /> */}
        </Layout>
    )
}

export default Home;