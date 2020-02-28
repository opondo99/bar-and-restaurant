import React from 'react';
import './restaurant.css'

const Restaurant = () => {
    return (
        <section className="restaurant">
            <div className="restaurant__left">
                <div className="hero-image"/>
                <div className="hero-sidekick"/>
                <div className="card-text">
                    <p>
                        Big Mark Restaurant is dedicated to
                        providing the best food and service
                        to our loyal customers and that is why
                        we are ranked among the top restaurants
                        in the city 
                    </p>
                    <a href="#">Menu</a>
                </div>
            </div>
            <div className="restaurant__right">
                <h1>Restaurant</h1>
                <h2>Opening Hours</h2>
                <div className="Hours">
                    <li>
                        <span>Monday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                    <li>
                    <span>Tuesday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                    <li>
                    <span>Wednesday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                    <li>
                    <span>Thursday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                    <li>
                    <span>Friday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                    <li>
                    <span>Saturday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                    <li>
                    <span>Sunday</span><strong>9:00am - 12:00pm</strong>
                    </li>
                </div>
            </div>
        </section>
    )
}

export default Restaurant;