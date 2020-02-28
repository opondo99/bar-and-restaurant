import React from 'react';
import image1 from '../images/header-food-image.jpg';
import image2 from '../images/cocktail2.jpg';
import image3 from '../images/food-image-with-dark-bg.jpg';
import './header.css';


const Header = () => {
    return (
        <section className="header">
            <div className="left">
                <div className="social-links">
                    <a href="https://facebook.com">FaceBook</a>
                    <a href="https://instagram.com">Instagram</a>
                    <a href="https://twitter.com">Twitter</a>
                </div>

                <a href="#">
                <div className="intro-text">
                    <h1>Big Mark</h1>
                    <h2>Bar and Restaurant</h2>
                </div>
                </a>
            </div>
            <div className="right">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Restaurant</a>
                    <a href="#">Bar</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="photo-grid">
                    <div className="long-image"/>
                    <div className="short-image1"/>
                    <div className="short-image2"/>
                    {/* <img src={image1} alt="Grilled meat"/>
                    <img src={image2} alt="cocktail" />
                    <img src={image3} alt="cooked food serving"/> */}
                </div>
            </div>
        </section>
    )
}

export default Header;