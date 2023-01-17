import './Header.css';
import { BiCamera, BiMenu} from "react-icons/bi";
import { FaTwitter,FaFacebookSquare,FaInstagram,FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";

function Header() {
    return(

        <>
            <header className="header d-flex align-items-center position-relative">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <a href="#top" className='logo d-flex align-items-center me-auto me-lg-0'>
                            <BiCamera className='camera'/>
                            <h1>PhotoFolio</h1>
                        </a>
                        <nav className="navbar navbar-expand-lg order-2 order-lg-1">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <BiMenu className='menu-icon'/>
                                </button>
                                <div className="collapse navbar-collapse mobile-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Services">Services</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                        </nav>
                        {/* <div className='header-social-links order-1 order-lg-2 align-items-center'>
                            <a href="#top"><FaTwitter/></a>
                            <a href="#top"><FaFacebookSquare/></a>
                            <a href="#top"><FaInstagram/></a>
                            <a href="#top"><FaLinkedin/></a>
                        </div> */}

                        <SocialMediaLinks/>
                    </div>
            </header>
        </>
    )
}

export function SocialMediaLinks() {

    window.open( '_blank', 'noopener,noreferrer');

    return(

        <div className='header-social-links order-1 order-lg-2 align-items-center'>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        </div>
    )
}

export default Header;