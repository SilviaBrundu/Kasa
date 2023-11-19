import React from 'react';
import ImageSource1 from "../img/ImageSource1.png"
import Banner from '../components/Banner';
import Offers from '../components/Offers';
import Layout from '../components/Layout';

function Home () {
    return (
        <Layout>
            <div> 
                <Banner title={'Chez vous, partout et ailleurs'} image={ImageSource1} alt={'Vue sur la mer'}/>
                <Offers />
            </div>
        </Layout>
    )
}

export default Home;