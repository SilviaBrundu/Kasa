import React from "react";
import ArrowLeft from "../img/arrow_left.png";
import ArrowRight from "../img/arrow_right.png";
import { useState } from "react";
import Data from '../data/data.json';
import { useParams } from "react-router-dom";

function SlideShow () {

    const { id } = useParams();
    /*useParams permet d'extraire la valeur du paramètre "id" dans l'URL.*/

    const pictures = Data.find((offer) => offer.id === id).pictures;

    const [Slide, setSlide] = useState(0);

    const changeSlide = (direction) => {
        const nextSlide = (Slide + direction + pictures.length) % pictures.length;
        setSlide(nextSlide);
    }
    //  * % pictures.length permet d'enchainer les slides en boucles. 

    return (
        <div className="slide_show_container">
            <div className='slide_show_pictures'>

                {pictures.map((picture, index) => (
                <img key={index} src={picture} alt="Photo logement" className={index === Slide ? 'visible' : ''}/>
                ))}

                {pictures.length > 1 && (
                // si le nombre d'image est superrieur a 1 alors on affiche les fleches et le nombre d'image
                <div className='slide_container' >
                    <div className='slide_content'>
                        <img className="slide_arrow slide_arrow_left" src={ArrowLeft} alt="gauche" onClick={() => changeSlide(-1)}></img>
                        <img className="slide_arrow slide_arrow_right" src={ArrowRight} alt="droite" onClick={() => changeSlide(1)}></img>
                    </div>
                    <p className='slide_number_img'>{Slide + 1 }/{pictures.length}</p>
                </div>
                )}

            </div>
        </div>
    )
}

export default SlideShow