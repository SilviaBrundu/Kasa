import { NavLink } from 'react-router-dom'
import logo from '../img/LOGO.png'
 
function Navbar() {
    return (
        <div className='navbar_container'>
            <div className='logo_container'>
                <img className='logo' src={logo} alt="Kasa"  />    
            </div>
            <nav>
                <NavLink to='/' className='navbar_link'>Accueil</NavLink> 
                <NavLink to='/About' className='navbar_link'>A propos</NavLink>
                {/* NavLink est utilisé pour afficher un style différent lorsque l'URL actuelle correspond au lien 
                (je l'utilise pour afficher l underline avec .active dans le css)*/}
            </nav>
        </div>
    )
}

export default Navbar