// je récupère les composants que je vais utilisé pour cette page
import React from 'react';
import imageSource2 from '../img/ImageSource2.png'
import Banner from '../components/Banner';
import CollapseContainer from '../components/CollapseContainer';
import Layout from '../components/Layout';

function About () {
    return (
        <Layout>
            <div> 
                <Banner image={imageSource2} alt={'vue sur la forêt'} />
                <CollapseContainer />
            </div>
        </Layout>
    )
}

export default About;