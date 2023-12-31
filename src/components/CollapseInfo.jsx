import React from 'react';
import Collapse from './Collapse';


function CollapseInfo ({equipments, description}) {
    const listEquipments = equipments.map((equipments, index) =>
    <li className='info_equipments' key={index}>{equipments}</li>
)

    return (
        <div className='info_collapse_container'>
            <div className='info_description_content'>
                <Collapse title='Description' text={<p>{description}</p>}/>
            </div>
            <div className='info_equipments_content'>
                <Collapse title='Equipement' text={<ul>{listEquipments}</ul>}/>
            </div>
        </div>
    )   
}

export default CollapseInfo;