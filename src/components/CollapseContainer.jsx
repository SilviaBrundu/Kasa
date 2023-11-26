import React from 'react';
import Collapse from './Collapse';


function CollapseContainer () {
  return (
    <div className='about_container'>
      <Collapse title='Fiabilité' text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos equipes.'/>

      <Collapse title='Respect' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.'/>

      <Collapse title='Service' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.'/>

      <Collapse title='Sécurité' text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de securité établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
  )
}

export default CollapseContainer;