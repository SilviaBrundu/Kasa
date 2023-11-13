// je récupère les composants que je vais utilisé pour cette page
import React from 'react';
import imageSource2 from '../img/ImageSource2.png'
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function About () {
    return (
        <div> 
            <Banner image = {imageSource2} alt={'vue sur la forêt'}/>
            <Footer />
        </div>
    )
}

export default About;