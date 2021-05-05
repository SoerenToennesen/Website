import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button'
import './Navbar.css';
import { useLocation } from 'react-router-dom'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const location = useLocation();
    const handleClick = () => setClick(!click);
    function closeMobileMenu(e, curLink) {
        if (location.pathname == curLink) e.preventDefault();
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []); 

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={(e) => closeMobileMenu(e, "/")}>
                        <i className="fas fa-user-circle"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={(e) => closeMobileMenu(e, "/")}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={(e) => closeMobileMenu(e, "/projects")}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={(e) => closeMobileMenu(e, "/about")}>
                                About me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-me' className='nav-links-mobile' onClick={(e) => closeMobileMenu(e, "/contact-me")}>
                                Contact me
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' linkto='contact-me'>CONTACT ME</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
