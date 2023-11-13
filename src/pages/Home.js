import React from 'react';
import ImageSource1 from "../img/ImageSource1.png"
import Banner from '../components/Banner';
import Offers from '../components/Offers';
import Footer from '../components/Footer';


function Home () {
    return (
        <div> 
            <Banner title = {'Chez vous, partout et ailleurs'} image = {ImageSource1} alt={'Vue sur la mer'}/>
            <Offers />
            <Footer/>
        </div>
    )
}

export default Home;