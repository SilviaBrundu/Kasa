import React, { useState } from 'react';
import Arrow from '../img/Arrow.png';

function Collapse ({title, text}) {
    const [ visible, setVisible ] = useState(false)
    
    const handleToggle = () => {
        setVisible(!visible);
      };
    
    return (
        <div className='about_container'>
            <div onClick={handleToggle} className={`about_content ${visible ? 'rotateArrow' : ''}`}>
                <h1 className='about_title'>{title}</h1>
                <img src={Arrow} alt="arrow" className="arrow"></img>
            </div>
            {visible&&(
                <div className='about_text_content'>
                    <p className='about_text'>{text}</p>
                </div>
            )}
        </div>
    )   
}


export default Collapse;