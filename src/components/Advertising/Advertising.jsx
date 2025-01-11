import React from "react";
import "./Advertising.css";
const Advertising = () => {
    return (
        <div className="advertising">

            <div className="sub-advertising">
                <div> <img
                    src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80"
                    alt="Summer Sale Advertisement"
                    className="ad-image" />
                    <div className="hoading-2">
                        <img className="ad-reddit-Logo" src="https://res.cloudinary.com/dtvqmmc3d/image/upload/v1736314571/reddit_logo_combination__2017___2023__by_thecobynetwork_dgqola7_kt8f1m.png" alt="logo" />
                        <p className="adv-para">Advertise on Reddit</p>
                        <button className="adv-button">Get Started</button>
                    </div>
                </div>

            </div>
            <div className="sub-advertising-1">
                <hr />
                <div className="copyright-ul">
                    <ul className="copyright-ul-2">
                        <li className="list">About</li>
                        <li className="list">Carrers</li>
                        <li className="list">Press</li>
                    </ul>
                    <ul className="copyright-ul-2">
                        <li className="list">Advertise</li>
                        <li className="list">Help</li>
                        <li className="list">Blog</li>
                    </ul>
                    <ul className="copyright-ul-2">
                        <li className="list">Reddit App</li>
                        <li className="list">Reddit Gold</li>
                        <li className="list">Reddit Hits</li>
                    </ul>
                </div>

                <hr />
                <ul className="copyright-ul-1">
                    <li>&copy; 2020</li>
                    <li>Privacy Terms</li>
                </ul>
            </div>
        </div>
    );
}
export default Advertising;