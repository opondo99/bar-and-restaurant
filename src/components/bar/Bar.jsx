import React from 'react';
import './bar.css'

const Bar = () => {
    return (
        <div className="Bar">
            <div className="Bar__left">
                <h1>Bar</h1>
                <h2>Opening Hours</h2>
                <div className="Hours">
                    <li><span>Monday</span><strong>9:00am - 5:00am</strong></li>
                    <li><span>Tuesday</span><strong>9:00am - 5:00am</strong></li>
                    <li><span>Wednesday</span><strong>9:00am - 5:00am</strong></li>
                    <li><span>Thursday</span><strong>9:00am - 5:00am</strong></li>
                    <li><span>Friday</span><strong>9:00am - 5:00am</strong></li>
                    <li><span>Saturday</span><strong>9:00am - 5:00am</strong></li>
                    <li><span>Sunday</span><strong>9:00am - 5:00am</strong></li>
                </div>
            </div>
            <div className="Bar__right">
                <div className="Bar__hero_image"/>
                <div className="Bar__hero_sidekick"/>
                <div className="Bar__card_text">
                    <p>
                        Come and enjoy your Happy hour moments in
                        our highly diverse bar. We make sure that you never get bored
                        by giving you a big array of choices to pick
                        from 
                    </p>
                    <a href="#">Menu</a>
                </div>
k            </div>
        </div>
    )
}

export default Bar;