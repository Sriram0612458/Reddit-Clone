import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { Mail, ChevronDown } from 'lucide-react';
import { BsSun } from "react-icons/bs";
import { faHome, faArrowTrendUp, faGlobe, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Searching from '../Searching/Searching';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="header">
            <div className="logo">
                <nav className="navbar navbar-light bg-light navbarContainer">
                    <button
                        className="navbar-toggler toogle-button"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                        <button className="close-btn" onClick={toggleMenu} aria-label="Close">
                            &times;
                        </button>
                        <ul className="navbar-nav">
                            <li className="home mb-3">
                                <FontAwesomeIcon icon={faHome} className="iconColor" /> Home
                            </li>
                            <li className="popular mb-3">
                                <FontAwesomeIcon icon={faArrowTrendUp} className="iconColor" />Popular
                            </li>
                            <li className="home mb-3">
                                <FontAwesomeIcon icon={faGlobe} className="iconColor" /> All
                            </li>
                        </ul>
                    </div>
                </nav>
                <BsSun className='theme' />
                <img className="reddit-Logo" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314571/reddit_logo_combination__2017___2023__by_thecobynetwork_dgqola7_kt8f1m.png" alt="logo" />
            </div>
            <div className='lg-container'>
                <div className="nav sideBar-Home">
                    <p className='home'> <FontAwesomeIcon icon={faHome} className="iconColor" />Home</p>
                    <p className='popular' ><FontAwesomeIcon icon={faArrowTrendUp} className="iconColor" /> Popular  </p>
                    <p className='home'> <FontAwesomeIcon icon={faGlobe} className="iconColor" />All</p>
                </div>
                <div className='sm-search-container'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    <button className="create-post-sm"><FontAwesomeIcon icon={faPlus} /> </button>
                    <img alt="logo" className="profileImageSmaller" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314354/pngegg_smej0a.png" />
                    <ChevronDown className="w-4 h-4 search-icon" />
                </div>
                <Searching />
                <button className="create-post-lg">Create Post</button>

                <div className="profile-icons">
                    <FontAwesomeIcon icon={faComment} className="comments " />
                    <Mail className="w-5 h-5 comments" />
                    <div>
                        <img alt="logo" className="profileImagelg" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314354/pngegg_smej0a.png" />
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
