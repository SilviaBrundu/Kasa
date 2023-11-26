import React from 'react';
import { Link } from 'react-router-dom';

function OfferCard ({offer}) {
    return(
        <div className='card_content'>
            <Link to={`/OfferFile/${offer.id}`} className='offer_file' key={offer.id}>
                <div className='card-content-img'>
                    <img className= 'card_img' src={offer.cover} alt={offer.title}></img>
                    <div className='card_opacity'></div>
                </div>
                <div className='card_content_title'>
                    <h2 className='card_title'>{offer.title}</h2>
                </div>
            </Link>
        </div>  
    )
}

export default OfferCard