import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data/data.json';
import Rating from './Rating';


function InformationOfferFile() {
    const { id } = useParams();

    const title = Data.find((titleData) => titleData.id === id).title;
    const location = Data.find((locationData) => locationData.id === id).location;
    // const tags = Data.find((tagsData) => tagsData.id === id).tags;
    const hostPicture = Data.find((hostPictureData) => hostPictureData.id === id).host.picture;
    const hostName = Data.find((hostNameData) => hostNameData.id === id).host.name;
    const rating = Data.find((ratingData) => ratingData.id === id).rating;

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
                <img className='informaton_host_picture'src={hostPicture} alt={'hôte(sse): ' + hostName}></img>
                <p className='information_host_name'>{hostName}</p>
            </div>
            <Rating rating={rating} />
        </div>
    )
}

export default InformationOfferFile