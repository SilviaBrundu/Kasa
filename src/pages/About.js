// je récupère les composants que je vais utilisé pour cette page
import React from 'react';
import imageSource2 from '../img/ImageSource2.png'
import Banner from '../components/Banner';
import CollapseAbout from '../components/CollapseAbout';
import Layout from '../components/Layout';

function About () {
    return (
        <Layout>
            <Banner image={imageSource2} alt={'vue sur la forêt'} />
            <CollapseAbout />
        </Layout>
    )
}

export default About;