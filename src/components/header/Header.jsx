import React from 'react';
import image1 from '../images/header-food-image.jpg';
import image2 from '../images/cocktail2.jpg';
import image3 from '../images/food-image-with-dark-bg.jpg';
// import { Link } from 'reac'
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

                <div className="dark-bg"/>
            
                <div className="intro-text">
                    <a href="#">
                        <h1>Big Mark</h1>
                        <h2>Bar and Restaurant</h2>
                    </a>
                </div>
                
            </div>
            <input type="checkbox" id="nav" class="hidden"/>

            <label for="nav" class="nav-btn">
                        <li></li>
                        <li></li>
                        <li></li>
            </label>

            <div className="nav-wrapper">
                    <ul>
                        <a href="#">Home</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </ul>
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