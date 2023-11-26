import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data/data.json';


function Information() {
    const { id } = useParams();

    const title = Data.find((titleData) => titleData.id === id).title;
    const location = Data.find((locationData) => locationData.id === id).location;
    // const hostPicture = Data.find((hostPictureData) => hostPictureData.id === id).host.picture;
    // const hostName = Data.find((hostNameData) => hostNameData.id === id).host.name;

    return (
        <div className='information_container'>
            <div className='information_title_location_content'>
                <h2 className='information_title'>{title}</h2>
                <p className='information_location'>{location}</p>
            </div>
            {/* <div className='information_host_content'>
                <img className='informaton_host_picture' alt={hostName}>{hostPicture}</img>
                <p className='information_host_name'>{hostName}</p>
            </div> */}
            
        </div>
    )
}

export default Information