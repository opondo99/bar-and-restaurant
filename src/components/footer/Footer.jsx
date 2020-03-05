import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <h1>Contact</h1>
                
                <div className="contact-content">
                    +254 795 133547<br/>
                    markopondo.m@gmail.com<br/>
                    Nairobi, Kenya
                </div>
            </div>
            <div className="site-map">
                <h1>Site Map</h1>
                <div className="site-map-content">
                    Home<br/>
                    Restaurant Menu<br/>
                    Bar Menu<br/>
                </div>
            </div>
            <div className="working-hours">
                <h1>Working Hours</h1>
                <div className="working-hours-content">
                    Monday - 9:00am-12:00am<br/>
                    Tuesday - 9:00am-12:00am<br/>
                    Wednesday - 9:00am-12:00am<br/>
                    Thursday - 9:00am-12:00am<br/>
                    Friday - 9:00am-12:00am<br/>
                    Weekends - 9:00am-12:00am<br/> 
                </div>
            </div>
        </div>
    )
}

export default Footer;