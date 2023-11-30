import React, { useState } from 'react';
import arrow from '../img/Arrow.png';

function Collapse ({title, text}) {
    const [ visible, setVisible ] = useState(false)
    
    const handleToggle = () => {
        setVisible(!visible)
    }
    
    return (
        <div className='collapse_container'>
            <div onClick={handleToggle} className={`collapse_content ${visible ? 'rotateArrow' : ''}`}>
                <h1 className='collapse_title collapse_title_info'>{title}</h1>
                <img src={arrow} alt='arrow' className='arrow'></img>
            </div>
            <div className={`collapse_text_content collapse_text_content_info ${visible ? 'dropDown' : ''}`}>{text}</div>
        </div>
    )   
}

export default Collapse;