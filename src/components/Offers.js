import Data from '../data/data.json'
//je récupère le fichier jSon

function Offers () {
    return(
        <div className='cards_container_box'>
            <div className='cards_container'>{Data.map((offers, index) => { //index = key, aide react a identifier les elements qui vont changer
                return(    
                    <div key={index}> 
                        <div className='card_content'>
                            <div className='card-content-img'>
                                <img className= 'card_img' src={offers.cover} alt={offers.title}></img>
                                <div className='card_opacity'></div>
                            </div>
                            <div className='card_content_title'>
                                <h2 className='card_title'>{offers.title}</h2>
                            </div>
                        </div>
                    </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Offers