import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data/data.json';


function Information() {
    const { id } = useParams();

    const title = Data.find((title) => title.id === id).title;

    return (
        <div className="information_container">
            <div className='information_title_content'>
                <h2 className='information_title'>{title}</h2>

            </div>
        </div>
    )
}

export default Information