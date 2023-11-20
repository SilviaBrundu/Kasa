import Data from '../data/data.json';
import OfferCard from './OfferCard';
//je récupère le fichier jSon

function Offers () {
    return(
        <div className='cards_container_box'>
            <div className='cards_container'>{Data.map((offer, index) => { //index = key, aide react a identifier les elements qui vont changer
                return(    
                    <div key={index} >
                        <OfferCard offer={offer} ></OfferCard>
                    </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Offers