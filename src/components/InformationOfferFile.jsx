import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Rating from './Rating';
import Host from './Host';
import TitleOfferFile from './TitleOfferFile';
import LocationOfferFile from './LocationOfferFile';
import Tags from './Tags';
import CollapseInfo from './CollapseInfo';


function InformationOfferFile() {
    const { id } = useParams();

    const {title, location, tags, host, rating ,description , equipments} = data.find((information) => information.id === id)

    return (
        <div className='info_container'>
            <div className='info_div_1'>
                <TitleOfferFile title={title} />
                <LocationOfferFile location={location} />
            </div>
            <div className='info_div_2'>
                <Tags tags={tags} />
                <Rating rating={rating} />
            </div>
            <div className='info_div_3'>
                <Host host={host} />
            </div>
            <div className='info_div_4'>
                <CollapseInfo description={description} equipments={equipments}/>
            </div>
        </div>
    )
}

export default InformationOfferFile