import React from "react";
import './Hemisphere.css';
import northernPic from "./image/north.jpg";
import southernPic from "./image/south.jpg";

const hemisphereConfig = {
    Northern: {
        text: 'It is northern hemisphere',
        picture: northernPic
    },
    Southern: {
        text: 'It is southern hemisphere',
        picture: southernPic
    }
}

const HemisphereDisplay = ({ latitude }) => {

    //console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture }= hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={ picture } alt="hemisphere picture" />
                </div>
                <div className='ui teal bottom attached label'>
                    { text }
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;