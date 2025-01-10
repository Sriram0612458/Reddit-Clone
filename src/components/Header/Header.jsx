import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComment } from '@fortawesome/free-regular-svg-icons';
import { Search, Bell, Mail, ChevronDown } from 'lucide-react';
import { faHome, faArrowTrendUp, faGlobe, faPlus, faAngleUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

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
                            <li className="nav-item active">

                                <a href="#home"> <FontAwesomeIcon icon={faHome} className="iconColor" /> Home</a>

                            </li>
                            <li className="nav-item">
                                <a href="#popular"><FontAwesomeIcon icon={faArrowTrendUp} />Popular  </a>

                            </li>
                            <li className="nav-item">
                                <a href="#all"> <FontAwesomeIcon icon={faGlobe} /> All</a>

                            </li>
                        </ul>
                        <aside className="sidebarCopy">
                            <div className="sectionCopy">
                                <h3>Favorites</h3>
                                <ul>
                                    <li>r/funnymoro</li>
                                    <li>r/breakingnews</li>
                                    <li>r/lovestory</li>
                                    <li>r/gamingfun</li>
                                </ul>
                            </div>
                            <div className="sectionCopy">
                                <h3>Reddit Feeds</h3>
                                <ul>
                                    <li>r/moview</li>
                                    <li>r/gaming</li>
                                    <li>r/pics</li>
                                    <li>r/gifs</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </nav>
                <img className="reddit-Logo" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314571/reddit_logo_combination__2017___2023__by_thecobynetwork_dgqola7_kt8f1m.png" />
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
                    <img className="profileImageSmaller" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314354/pngegg_smej0a.png" />
                </div>

                <button className="create-post-lg">Create Post</button>

                <div className="profile-icons">
                    <FontAwesomeIcon icon={faComment} />
                    <Mail className="w-5 h-5" />
                    <img className="profileImagelg" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314354/pngegg_smej0a.png" />
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
        </header>
    );
};

export default Header;
