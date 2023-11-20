import React from "react";

function OfferCard ({offer}) {

    return(
        <div className='card_content'> 
            <div className='card-content-img'>
                <img className= 'card_img' src={offer.cover} alt={offer.title}></img>
                <div className='card_opacity'></div>
            </div>
            <div className='card_content_title'>
                <h2 className='card_title'>{offer.title}</h2>
            </div>
        </div>  
    )
}

export default OfferCard