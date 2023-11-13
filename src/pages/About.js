// je récupère les composants que je vais utilisé pour cette page
import React from 'react';
import BannerAbout from '../components/BannerAbout';
import Footer from '../components/Footer';

function About () {
    return (
        <div> 
            <BannerAbout />
            <Footer />
        </div>
    )
}

export default About;