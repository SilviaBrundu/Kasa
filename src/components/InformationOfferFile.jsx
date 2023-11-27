import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Rating from './Rating';
import Host from './Host';
import TitleOfferFile from './TitleOfferFile';
import LocationOfferFile from './LocationOfferFile';


function InformationOfferFile() {
    const { id } = useParams();

    const {title, location, host, rating} = data.find((information) => information.id === id)

    return (
        <div className='information_container'>
            <TitleOfferFile title={title} />
            <LocationOfferFile location={location} />
            <Host host={host} />
            <Rating rating={rating} />
        </div>
    )
}

export default InformationOfferFile