import React from 'react';
import logo from '../img/LOGOF.png';

function Footer() {
  return (
    <footer className='footer_container'>
        <div className='footer_logo_container'>
            <img className="footer_logo" src={logo} alt="Kasa"  />
            <p className="footer_copyright">&#169;  2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer