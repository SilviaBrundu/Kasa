import React from 'react';
import Collapse from './Collapse';
import aboutData from '../data/aboutData.json';

function CollapseAbout () {

  return (
      <div className="about-container">
        {aboutData.map((aboutData, index) => {
          return (
            <Collapse key={index} title={aboutData.title} text={<p className='about_text'>{aboutData.text}</p>}/>
          );
        })}
      </div>
  );
}

export default CollapseAbout