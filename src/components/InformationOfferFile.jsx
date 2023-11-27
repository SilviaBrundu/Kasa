import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Rating from './Rating';


function InformationOfferFile() {
    const { id } = useParams();

    const {title, location, host, rating} = data.find((information) => information.id === id)

    return (
        <div className='information_container'>
            <div className='information_title_location_content'>
                <h2 className='information_title'>{title}</h2>
                <p className='information_location'>{location}</p>
            </div>
            {/* <ul className='information_tags'>
                <li className='information_tags_list'>
                    {tags}
                </li>
            </ul> */}
            <div className='information_host_content'>
                <img className='informaton_host_picture'src={host.picture} alt={'hôte(sse): ' + host.name}></img>
                <p className='information_host_name'>{host.name}</p>
            </div>
            <Rating rating={rating} />
        </div>
    )
}

export default InformationOfferFile