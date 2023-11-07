import { Link } from 'react-router-dom'
import logo from '../img/LOGO.png'
 
function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className='logoContainer'>
                <img className='logo' src={logo} alt="Kasa"  />    
            </div>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/About'>A propos</Link>
            </nav>
        </div>
    )
}

export default Navbar