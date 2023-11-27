import React from 'react';
import imageSource1 from "../img/ImageSource1.png"
import Banner from '../components/Banner';
import Offers from '../components/Offers';
import Layout from '../components/Layout';

function Home () {
    return (
        <Layout>
            <Banner title={'Chez vous, partout et ailleurs'} image={imageSource1} alt={'Vue sur la mer'}/>
            <Offers />    
        </Layout>
    )
}

export default Home;