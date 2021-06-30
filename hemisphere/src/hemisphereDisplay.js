import React from "react";
import northernPic from "./image/north.jpg";
import southernPic from "./image/south.jpg";

const HemisphereDisplay = ({ latitude }) => {

    //console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern hemisphere' : 'Southern hemisphere';
    const picture = latitude > 0 ? northernPic : southernPic;

    return (
        <div>
            { hemisphere }
            <img src={ picture } alt="hemisphere " />
        </div>
    )
}

export default HemisphereDisplay;