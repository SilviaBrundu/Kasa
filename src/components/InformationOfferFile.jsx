import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data/data.json';


function Information() {
    const { id } = useParams();

    const title = Data.find((title) => title.id === id).title;
    const location = Data.find((location) => location.id === id).location;

    return (
        <div className='information_container'>
            <div className='information_title_location_content'>
                <h2 className='information_title'>{title}</h2>
                <p className='information_location'>{location}</p>
            </div>
        </div>
    )
}

export default Information