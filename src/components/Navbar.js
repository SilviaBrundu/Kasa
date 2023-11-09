import { Link } from 'react-router-dom'
import logo from '../img/LOGO.png'
 
function Navbar() {
    return (
        <div className='navbar_container'>
            <div className='logo_container'>
                <img className='logo' src={logo} alt="Kasa"  />    
            </div>
            <nav>
                <Link to='/' className='navbar_link'>Accueil</Link>
                <Link to='/About' className='navbar_link'>A propos</Link>
            </nav>
        </div>
    )
}

export default Navbar