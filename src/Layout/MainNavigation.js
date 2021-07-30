import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import { FaInstagram } from 'react-icons/fa';
import { FaAnchor } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFlickr } from 'react-icons/fa';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/Art">Art</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/Honors">Honors</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <a href=""><FaInstagram /></a>
                    </li>
                    <li>
                        <a href=""><FaAnchor /></a>
                    </li>
                    <li>
                        <a href=""><FaYoutube /></a>
                    </li>
                    <li>
                        <a href=""><FaFlickr /></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation