import Datas from '../datas/data.json'
//je récupère le fichier jSon

function Offers () {
    return(
        <div className='cards_container_box'>
            <div className='cards_container'>{Datas.map((offers, index) => { //index = keys
                return (
                    <div className='card_content'>
                        <div className='card-content-img'>
                            <img className= 'card_img' src={offers.cover} alt={offers.title}></img>
                        </div>
                        <div className='card_content_title'>
                            <h2 className='card_title'>{offers.title}</h2>
                        </div>
                    </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Offers